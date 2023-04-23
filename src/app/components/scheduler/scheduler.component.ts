import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';
import { Appointment } from '.././../interfaces/appointment';
import { Holiday } from '.././../interfaces/holiday';
import { ScheduleService } from '../schedule.service';
import { from } from 'rxjs';

@Component({
  selector: 'app-scheduler',
  templateUrl: './scheduler.component.html',
  styleUrls: ['./scheduler.component.css'],
})
export class SchedulerComponent implements OnInit {
  appointmentsData$!: Observable<Appointment[]>;
  holidaysData$!: Observable<Holiday[]>;

  currentDate: Date = new Date();

  constructor(private scheduleService: ScheduleService) {}

  ngOnInit(): void {
    this.holidaysData$ = from(this.scheduleService.getHolidays());
    this.appointmentsData$ = from(this.scheduleService.getAppointments());
  }

  addAppointment(e: any) {
    this.scheduleService.addAppointment(e.appointmentData);
  }

  editAppointment(e: any) {
    this.scheduleService.editAppointment(e.newData);
  }

  deleteAppointment(e: any) {
    this.scheduleService.deleteAppointment(e.appointmentData.id);
  }
}
