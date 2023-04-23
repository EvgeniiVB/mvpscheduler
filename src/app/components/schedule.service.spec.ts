import { TestBed } from '@angular/core/testing';
import { ScheduleService } from './schedule.service';
import { Appointment } from '../interfaces/appointment';
import { Holiday } from '../interfaces/holiday';
import { holidays, appointments } from '../_mocks_/mocks';

describe('ScheduleService', () => {
  let scheduleService: ScheduleService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [ScheduleService],
    });
    scheduleService = TestBed.inject(ScheduleService);
  });

  it('should be created', () => {
    expect(scheduleService).toBeTruthy();
  });

  describe('getAppointments', () => {
    it('should return an array of appointments', async () => {
      const appointmentsData: Appointment[] = appointments;
      spyOn(scheduleService.dataSource, 'load').and.returnValue(
        Promise.resolve(appointmentsData)
      );
      const result = await scheduleService.getAppointments();
      expect(result).toEqual(appointmentsData);
    });
  });

  describe('editAppointment', () => {
    it('should update appointment details in the data source', async () => {
      const appointmentData: Appointment = {
        id: 'd1fdac83-db54-4b6b-ab21-317288aa89bc',
        text: 'Test Appointment 1 Updated',
        startDate: '2023-04-24T11:09:58.000Z',
        endDate: '2023-04-24T11:10:58.000Z',
      };
      spyOn(scheduleService.dataSource.store(), 'update').and.callThrough();
      spyOn(scheduleService, 'getAppointments').and.callThrough();

      await scheduleService.editAppointment(appointmentData);

      expect(scheduleService.dataSource.store().update).toHaveBeenCalledWith(
        jasmine.any(String),
        jasmine.objectContaining(appointmentData)
      );
      expect(scheduleService.getAppointments).toHaveBeenCalled();
    });
  });

  describe('deleteAppointment', () => {
    it('should remove an appointment from the data source', async () => {
      const appointmentId: string = '1';
      spyOn(scheduleService.dataSource.store(), 'remove').and.callThrough();
      spyOn(scheduleService, 'getAppointments').and.callThrough();

      await scheduleService.deleteAppointment(appointmentId);

      expect(scheduleService.dataSource.store().remove).toHaveBeenCalledWith(
        jasmine.any(String)
      );
      expect(scheduleService.getAppointments).toHaveBeenCalled();
    });
  });

  describe('getHolidays', () => {
    it('should return an array of holidays', async () => {
      const holidaysData: Holiday[] = [
        { id: 1, text: 'Holiday 1', color: 'red' },
        { id: 2, text: 'Holiday 2', color: 'green' },
      ];
      spyOn(scheduleService.dataSourceHolidays, 'load').and.returnValue(
        Promise.resolve(holidaysData)
      );
      const result = await scheduleService.getHolidays();
      expect(result).toEqual(holidaysData);
    });
  });
});
