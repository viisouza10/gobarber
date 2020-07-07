import 'reflect-metadata';

import express from 'express';
import routes from './routes';

import './databate';

const app = express();

app.use(routes);

app.listen(3333);
