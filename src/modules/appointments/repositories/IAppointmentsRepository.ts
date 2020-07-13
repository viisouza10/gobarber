import Appointment from '../infra/typeorm/entities/Appointment';
import ICreteAppointmentDTO from '../dtos/ICreateAppointmentDTO';

interface IAppointmentsRepository {
  create(data: ICreteAppointmentDTO): Promise<Appointment>;
  findByDate(date: Date): Promise<Appointment | undefined>;
}

export default IAppointmentsRepository;
