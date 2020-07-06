import { isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

interface CreateAppointemntDTO {
  provider: string;
  date: Date
}
class AppointmentsRepository {
  private appointments: Appointment[];

  constructor() {
    this.appointments = [];
  }

  public all(): Appointment[] {
    return this.appointments;
  }

  public create({ provider, date }: CreateAppointemntDTO): Appointment {
    const appointment = new Appointment({ provider, date });

    this.appointments.push(appointment);

    return appointment;
  }

  public findByDate(date: Date): Appointment | null {
    // eslint-disable-next-line max-len
    const findAppointment = this.appointments.find((appointment) => isEqual(date, appointment.date));

    return findAppointment || null;
  }
}

export default AppointmentsRepository;
