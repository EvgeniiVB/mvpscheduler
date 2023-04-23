import { Injectable } from '@angular/core';
import LocalStore from 'devextreme/data/local_store';
import DataSource from 'devextreme/data/data_source';
import { Appointment } from '../interfaces/appointment';
import { Holiday } from '../interfaces/holiday';
import { idUuidv } from '../helpers/uniqidgen';
import { holidays, appointments } from '../_mocks_/mocks';
import { updateAppointments } from '../helpers/helpers';

@Injectable({
  providedIn: 'root',
})
export class ScheduleService {
  dataSource!: DataSource;
  dataSourceHolidays: DataSource;

  constructor() {
    this.dataSource = new DataSource({
      store: new LocalStore({
        key: 'id',

        //Demo mode. Comment for prod. env
        data: appointments,
        name: 'appointmentsData',
      }),
    });

    this.dataSourceHolidays = new DataSource({
      store: new LocalStore({
        key: 'id',
        data: holidays,
        name: 'holidaysData',
      }),
    });
  }

  getAppointments(): Promise<Appointment[]> {
    return this.dataSource.load();
  }

  addAppointment(data: Appointment): Promise<void | Appointment[]> {
    return this.dataSource
      .store()
      .insert({ ...data, id: idUuidv() })
      .then(() => {
        return this.getAppointments().then((appointments) => {
          updateAppointments(appointments);
        });
      });
  }

  editAppointment(data: Appointment): Promise<void | Appointment[]> {
    return this.dataSource
      .store()
      .update(data.id, data)
      .then(() => {
        return this.getAppointments().then((appointments) => {
          updateAppointments(appointments);
        });
      });
  }

  deleteAppointment(id: string): Promise<void | Appointment[]> {
    return this.dataSource
      .store()
      .remove(id)
      .then(() => {
        return this.getAppointments().then((appointments) => {
          updateAppointments(appointments);
        });
      });
  }

  getHolidays(): Promise<Holiday[]> {
    return this.dataSourceHolidays.load();
  }
}
