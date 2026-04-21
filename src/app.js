import express from 'express';
import dotenv from 'dotenv';
import logger from './config/logger.js';
import helmet from 'helmet';
import morgan from 'morgan'
import cors from 'cors';
import cookieParser from 'cookie-parser';


const app = express();
app.use(helmet());
app.use(express.json())
app.use(cookieParser());
app.use(cors())
app.use(express.urlencoded({ extended: true }));
app.use(morgan('combined', { stream: { write: message => logger.info(message) } }))
dotenv.config();
const PORT = process.env.PORT; 

app.get('/', (req, res) => {
  res.status(200).send(`hello from http://localhost:${PORT}`);
});

export default app;
