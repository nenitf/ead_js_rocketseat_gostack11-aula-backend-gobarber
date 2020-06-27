import 'reflect-metadata';

import express, { Request, Response, NextFunction } from 'express';
import cors from 'cors';
import { errors } from 'celebrate';
import 'express-async-errors';

import uploadConfig from '@config/upload';
import AppError from '@shared/errors/AppError';
import routes from './routes';

import '@shared/infra/typeorm';
import '@shared/container';

const app = express();

// libera para qualquer site o uso da api
app.use(cors());

// o correto seria:
// app.use(
//   cors({
//     origin: 'http//dominio-confiavel.com',
//   }),
// );

app.use(express.json());
app.use('/files', express.static(uploadConfig.tmpFolder));
app.use(routes);

// erros de valiudação do celebrate
app.use(errors());

app.use((err: Error, request: Request, response: Response, _: NextFunction) => {
  if (err instanceof AppError) {
    return response.status(err.statusCode).json({
      status: 'error',
      message: err.message,
    });
  }

  console.error(err);

  return response.status(500).json({
    status: 'error',
    message: 'Internal server error',
  });
});

app.listen(3333, () => {
  console.log('SERVER STARTED ON PORT 3333');
});
