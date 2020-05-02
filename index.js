import express from 'express';
import { middleware as cache } from 'apicache';
import morgan from 'morgan';
import helmet from 'helmet';
import cors from 'cors';

import { messages } from './router';


const app = express();

app.use(morgan('combined'));
app.use(cors());
app.use(helmet());
app.use(cache('5 minutes'));
app.use('/messages', messages);

app.listen(process.env.MESSAGES_APP_HTTP_PORT || 3000);
