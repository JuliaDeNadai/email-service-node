import serverless from 'serverless-http'; // Converte o app Express para Lambda handler
import { APIGatewayProxyEvent, Context } from 'aws-lambda';
import {app} from "../express/api"

// Converte a aplicação Express para funcionar no ambiente Lambda
const handler = serverless(app);

// Função exportada para a Lambda
export const lambdaHandler = async (event: APIGatewayProxyEvent, context: Context) => {
  return handler(event, context);
};