import { Router } from 'express';
import { startOfHour, parseISO, isEqual } from 'date-fns';
import Appointment from '../models/Appointment';

const appointmentsRouter = Router();

const appointments: Appointment[] = [];

// localhost:3333/appointments
appointmentsRouter.post('/', (request, response) => {
  const { provider, date } = request.body;

  // zera horario, se vier 2020-04-07T20:34:03 fica 2020-04-07T00:00:00.000Z
  const parsedDate = startOfHour(parseISO(date));

  // procura se o horário já está marcado
  const findAppointmentInSameDate = appointments.find(appointment =>
    isEqual(parsedDate, appointment.date),
  );

  if (findAppointmentInSameDate) {
    return response
      .status(400)
      .json({ message: 'This appointment is already booked' });
  }

  const appointment = new Appointment(provider, parsedDate);

  appointments.push(appointment);

  return response.json(appointment);
});

export default appointmentsRouter;
