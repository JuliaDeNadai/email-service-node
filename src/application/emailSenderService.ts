import { EmailSenderGateway } from "src/adapters/emailSenderGateway"
import { injectable } from "tsyringe"

@injectable()
class EmailSenderService implements EmailSenderUseCase {

  constructor(private emailSenderGateway: EmailSenderGateway) {}

  sendEmail(to: string, subject: string, body: string): void {
    this.emailSenderGateway.sendEmail(to, subject, body)
  }
  
}

export {EmailSenderService};