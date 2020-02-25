import { Router } from 'express';
import multer from 'multer';
import multerConfig from './config/multer';

import AppointementController from './app/controllers/AppointementController';
import UserController from './app/controllers/UserController';
import SessionController from './app/controllers/SessionController';
import FileController from './app/controllers/FileController';
import ProviderController from './app/controllers/ProviderController';
import NotificationController from './app/controllers/NotificationController';

import authMiddleware from './app/middlewares/auth';
import ScheduleController from './app/controllers/ScheduleController';

const routes = new Router();
const upload = multer(multerConfig);

routes.post('/users', UserController.store);
routes.post('/sessions', SessionController.store);

routes.use(authMiddleware);

routes.put('/users', authMiddleware, UserController.update);

routes.get('/providers', ProviderController.index);

routes.post('/appointments', AppointementController.store);
routes.get('/appointments', AppointementController.index);
routes.delete('/appointments/:id', AppointementController.delete);

routes.get('/schedule', ScheduleController.index);

routes.get('/notifications', NotificationController.index);
routes.put('/notifications/:id', NotificationController.update);

routes.post('/files', upload.single('file'), FileController.store);

export default routes;
