import AppError from '@shared/errors/AppError';
import FakeAppointmentsRepository from '../repositories/fakes/FakeAppointmentsRepository';
import CreateAppointmentService from './CreateAppointmentService';

describe('CreateAppointment', () => {
  it('should be able to create a new appointment', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );
    const date = new Date();
    const appointment = await createAppointment.execute({
      date,
      provider_id: '3123123123',
    });

    expect(appointment).toHaveProperty('id');
    expect(appointment.provider_id).toBe('3123123123');
  });

  it('should not be able to create two appointments on the same time', async () => {
    const fakeAppointmentsRepository = new FakeAppointmentsRepository();
    const createAppointment = new CreateAppointmentService(
      fakeAppointmentsRepository,
    );

    const date = new Date(2020, 4, 10, 11);

    await createAppointment.execute({
      date,
      provider_id: '3123123123',
    });

    await expect(
      createAppointment.execute({
        date,
        provider_id: '3123123123',
      }),
    ).rejects.toBeInstanceOf(AppError);
  });
});
