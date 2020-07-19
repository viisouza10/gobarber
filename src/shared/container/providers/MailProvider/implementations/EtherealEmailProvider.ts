import nodemailer, { Transporter } from 'nodemailer';
import IMailProvider from '../models/IMailProvider';

class EtherealEmailProvider implements IMailProvider {
  private client: Transporter;

  constructor() {
    nodemailer.createTestAccount().then(account => {
      const tranporter = nodemailer.createTransport({
        host: account.smtp.host,
        port: account.smtp.port,
        secure: account.smtp.secure,
        auth: {
          user: account.user,
          pass: account.pass,
        },
      });

      this.client = tranporter;
    });
  }

  public async sendEmail(to: string, body: string): Promise<void> {
    const info = await this.client.sendMail({
      from: 'Equipe GoBarber :<equipe.gobarber.com.br>',
      to,
      subject: 'Recuperação de senha',
      text: body,
    });

    console.log('Message sent: %s', info.messageId);
    console.log('Preview URL: %s', nodemailer.getTestMessageUrl(info));
  }
}

export default EtherealEmailProvider;
