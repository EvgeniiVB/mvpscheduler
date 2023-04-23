export interface Appointment {
  id: string;
  text: string;
  startDate: Date | string;
  endDate: Date | string;
  allDay?: boolean;
  description?: any;
  recurrenceRule?: string;
  holidayId?: number;
}
