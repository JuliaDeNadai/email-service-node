import express from 'express';
import { SesEmailSender } from '../infra/ses/sesEmailSender';

const emailEnpoint = express.Router()

emailEnpoint.route('/')
    .post((req: express.Request, res: express.Response) => {
      let {to, subject, body} = req.body;
      console.log(to, subject, body)
      let emailSender: SesEmailSender = new SesEmailSender()
      emailSender.sendEmail([to], subject, body)
      res.send('Send email');
    });

export {emailEnpoint}