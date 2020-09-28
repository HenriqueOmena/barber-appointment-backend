import { getCustomRepository } from 'typeorm';
import Appointment from 'models/Appointment';
import AppointmentsRepository from 'repositories/AppointmentsRepository';
import { startOfHour } from 'date-fns';

interface Request {
  provider: string;
  date: Date;
}

/**
 * TODO: refactor this block of code maybe separate a method to getAppointmentByDate and
 * add a property this.repository = getCustomRepository(AppointmentsRepository) to use where is needed
 * without reassign getCustomRepository in all methods
 */
class CreateAppointmentService {
  public async execute({ date, provider }: Request): Promise<Appointment> {
    const appointmentRepository = getCustomRepository(AppointmentsRepository);
    const appointmentDate = startOfHour(date);
    const findAppointmentInSameDate = appointmentRepository.findByDate(
      appointmentDate
    );

    if (findAppointmentInSameDate) {
      throw Error('This appointment is already booked');
    }

    const appointment = appointmentRepository.create({
      provider,
      date: appointmentDate,
    });

    await appointmentRepository.save(appointment);

    return appointment;
  }
}

export default CreateAppointmentService;
