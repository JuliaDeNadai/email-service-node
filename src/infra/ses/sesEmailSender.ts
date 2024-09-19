import AWS from 'aws-sdk';

AWS.config.update({ region: 'sa-east-1' });
AWS.config.credentials = new AWS.Credentials({
  accessKeyId: process.env.accessKeyId || "",
  secretAccessKey: process.env.secretAccessKey || ""
})

const ses = new AWS.SES({ apiVersion: '2010-12-01' });


class SesEmailSender {
  async sendEmail(to: string[], subject: string, body: string){
    let emailParams = {
      Destination: {
        ToAddresses: to
      },
      Message: {
        Body: {
          Text: {
            Data: body,
            Charset: 'UTF-8'
          }
        },
        Subject: {
          Data: subject,
          Charset: 'UTF-8'
        }
      },
      Source: "denadaish@gmail.com"
    };

    try{
      let result = await ses.sendEmail(emailParams, (res) => {
        console.log(res)
      })

    }
    catch(error){
      console.log(error)
    }
    

  }
}

export {SesEmailSender}