import { Appointment } from '../interfaces/appointment';

export function updateAppointments(newAppointments: Appointment[]) {
  localStorage.setItem(
    'dx-data-localStore-appointmentsData',
    JSON.stringify(newAppointments)
  );
}
