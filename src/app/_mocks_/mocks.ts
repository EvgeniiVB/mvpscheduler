import { Appointment } from '../interfaces/appointment';
import { Holiday } from '../interfaces/holiday';

export const appointments: Appointment[] = [
  {
    id: 'd1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Website Re-Design Plan',
    startDate: new Date('2023-04-24T14:09:58'),
    endDate: new Date('2023-04-24T15:09:58'),
  },
  {
    id: 'a1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Book Flights to San Fran for Sales Trip',
    startDate: new Date('2023-04-24T17:09:58'),
    endDate: new Date('2023-04-24T17:09:58'),
    allDay: true,
  },
  {
    id: 'a13dac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Install New Router in Dev Room',
    startDate: new Date('2023-04-25T11:09:58'),
    endDate: new Date('2023-04-25T12:09:58'),
  },
  {
    id: 'a1fdac81-db54-4b6b-ab21-317288aa89bc',
    text: 'Approve Personal Computer Upgrade Plan',
    startDate: new Date('2023-04-25T15:09:58'),
    endDate: new Date('2023-04-25T18:09:58'),
  },
  {
    id: 'b1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Final Budget Review',
    startDate: new Date('2023-04-26T09:00:58'),
    endDate: new Date('2023-04-26T10:00:58'),
  },
  {
    id: 'a1fdac83-db51-4b6b-ab21-317288aa89bc',
    text: 'New Brochures',
    startDate: new Date('2023-04-26T15:00:58'),
    endDate: new Date('2023-04-26T16:00:58'),
  },
  {
    id: 'v1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Install New Database',
    startDate: new Date('2023-04-27T11:00:58'),
    endDate: new Date('2023-04-27T12:00:58'),
  },
  {
    id: 'v1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Approve New Online Marketing Strategy',
    startDate: new Date('2023-04-27T17:00:58'),
    endDate: new Date('2023-04-27T18:00:58'),
  },
  {
    id: 'v1fdac83-db54-4b6b-ab21-317288aa89bc',
    text: 'Upgrade Personal Computers',
    startDate: new Date('2023-04-27T10:00:58'),
    endDate: new Date('2023-04-27T11:00:58'),
  },
  {
    id: 'a1fdac83w-db54-4b6b-ab21-317288aa89bc',
    text: 'Holiday',
    startDate: new Date('2023-04-21T10:00:58'),
    endDate: new Date('2023-04-21T11:00:58'),
    allDay: true,
    holidayId: 1,
  },
  {
    id: '4c479414-64f8-41fb-9033-9d4456d290f1',
    allDay: false,
    startDate: new Date('2023-04-24T09:00:58'),
    endDate: new Date('2023-04-24T09:30:58'),
    text: 'Daily meeting',
    description: 'Status report',
    recurrenceRule: 'FREQ=DAILY;UNTIL=20230428T205959Z',
  },

  {
    id: 'a1fdac83-db54-4b6b-ab21-317288aa89bg',
    text: 'Prepare 2023 Marketing Plan',
    startDate: new Date('2023-04-27T12:30:58'),
    endDate: new Date('2023-04-27T12:45:58'),
  },
  {
    id: 'a1fdac83-db54-4b6b-ab21-317288aa89bcc',
    text: 'Brochure Design Review',
    startDate: new Date('2023-04-24T21:00:00.000Z'),
    endDate: new Date('2023-04-24T22:30:00.000Z'),
  },
];

export const holidays: Holiday[] = [
  {
    text: 'Holiday 1',
    id: 1,
    color: '#bbd806',
  },
  {
    text: 'Holiday 2',
    id: 2,
    color: '#f34c8a',
  },
  {
    text: 'Holiday 3',
    id: 3,
    color: '#ae7fcc',
  },
  {
    text: 'Holiday 4',
    id: 4,
    color: '#ff8817',
  },
  {
    text: 'Holiday 5',
    id: 5,
    color: '#03bb92',
  },
];
