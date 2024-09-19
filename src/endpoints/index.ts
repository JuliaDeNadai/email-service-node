import express from 'express';
import { healthCheckEnpoint } from './healthcheck';
import { emailEnpoint } from './email';

const endpoints = express.Router()

endpoints.use('/api/healthcheck', healthCheckEnpoint)
endpoints.use('/api/email', emailEnpoint)

export {endpoints};