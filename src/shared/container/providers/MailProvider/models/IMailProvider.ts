interface IMailProvider {
  sendEmail(to: string, body: string): Promise<void>;
}

export default IMailProvider;
