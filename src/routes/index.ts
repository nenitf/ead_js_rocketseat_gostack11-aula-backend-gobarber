import { Router } from 'express';
import appointmentsRouter from './appointments.routes';

const routes = Router();

// repassa qualquer verbo http (get, post, put etc) da rota appointments
// para a variável/arquivo appointmentsRouter
routes.use('/appointments', appointmentsRouter);

export default routes;
