import { container } from 'tsyringe';
import mailConfig from '@config/mail';

import IMailProvider from './models/IMailProvider';

import EtherealEmailProvider from './implementations/EtherealEmailProvider';
import SESMailProvider from './implementations/SESMailProvider';

const providers = {
  ethereal: container.resolve(EtherealEmailProvider),
  ses: container.resolve(SESMailProvider),
};

// necessário quando precisa executar a constructor da classe
container.registerInstance<IMailProvider>(
  'MailProvider',
  providers[mailConfig.driver],
);
