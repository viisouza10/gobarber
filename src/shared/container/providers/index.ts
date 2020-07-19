import { container } from 'tsyringe';

import DiskStorageProvider from './StorageProvider/implementations/DiskStorageProvider';
import IStorageProvider from './StorageProvider/models/IStorageProvider';

import IMailProvider from './MailProvider/models/IMailProvider';
import EtherealEmailProvider from './MailProvider/implementations/EtherealEmailProvider';

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  DiskStorageProvider,
);

// necessário quando precisa executar a constructor da classe
container.registerInstance<IMailProvider>(
  'MailProvider',
  new EtherealEmailProvider(),
);
