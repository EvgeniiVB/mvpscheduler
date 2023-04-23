import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SchedulerComponent } from './scheduler.component';
import { ScheduleService } from '../schedule.service';
import { Appointment } from '../../interfaces/appointment';

import { of } from 'rxjs';
import { SchedulerModule } from './scheduler.module';

describe('SchedulerComponent', () => {
  let component: SchedulerComponent;
  let fixture: ComponentFixture<SchedulerComponent>;
  let scheduleServiceStub: Partial<ScheduleService>;

  beforeEach(() => {
    scheduleServiceStub = {
      getHolidays: jasmine.createSpy().and.returnValue(of([])),
      getAppointments: jasmine.createSpy().and.returnValue(of([])),
      addAppointment: jasmine.createSpy(),
      editAppointment: jasmine.createSpy(),
      deleteAppointment: jasmine.createSpy(),
    };

    TestBed.configureTestingModule({
      declarations: [SchedulerComponent],
      providers: [{ provide: ScheduleService, useValue: scheduleServiceStub }],
      imports: [SchedulerModule],
    });

    fixture = TestBed.createComponent(SchedulerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  describe('ngOnInit', () => {
    it('should call  getAppointments and getHolidays  on the service', () => {
      expect(scheduleServiceStub.getAppointments).toHaveBeenCalled();
      expect(scheduleServiceStub.getHolidays).toHaveBeenCalled();
    });
  });

  describe('addAppointment', () => {
    it('should call addAppointment on the service with correct argument', () => {
      const expectedAppointment: Appointment = {
        id: '1',
        text: 'Appointment 1',
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 0, 2),
      };

      component.addAppointment({ appointmentData: expectedAppointment });

      expect(scheduleServiceStub.addAppointment).toHaveBeenCalledWith(
        expectedAppointment
      );
    });
  });

  describe('editAppointment', () => {
    it('should call editAppointment on the service with correct argument', () => {
      const expectedAppointment: Appointment = {
        id: '1',
        text: 'New Appointment',
        startDate: new Date(2022, 0, 1),
        endDate: new Date(2022, 0, 2),
      };
      const expectedEventData: any = { newData: expectedAppointment };

      component.editAppointment(expectedEventData);

      expect(scheduleServiceStub.editAppointment).toHaveBeenCalledWith(
        expectedAppointment
      );
    });
  });

  describe('deleteAppointment', () => {
    it('should call deleteAppointment on the service with correct argument', () => {
      const expectedId: string = '1';
      const expectedEventData: any = { appointmentData: { id: expectedId } };

      component.deleteAppointment(expectedEventData);

      expect(scheduleServiceStub.deleteAppointment).toHaveBeenCalledWith(
        expectedId
      );
    });
  });
});
