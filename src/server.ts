import 'reflect-metadata';

import express from 'express';
import routes from './routes';
import uploadConfig from './config/upload';

import './databate';

const app = express();

app.use(express.json());
app.use('/files', express.static(uploadConfig.directory));
app.use(routes);

app.listen(process.env.PORT || 3333, () => {
  console.log(`🚀 Server starded on port ${process.env.PORT || '3333'}`);
});
