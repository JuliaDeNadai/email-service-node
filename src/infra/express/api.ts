import express from 'express';
import { endpoints } from '../../endpoints/index';
import swaggerUi from "swagger-ui-express";
import swaggerOutput from "../../../swagger_output.json";

const app = express();

app.use(express.json());
app.use(endpoints)
app.use('/docs', swaggerUi.serve, swaggerUi.setup(swaggerOutput));

export {app}