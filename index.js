import express from 'express';
import { middleware as cache } from 'apicache';
import helmet from 'helmet';
import cors from 'cors';

import { MESSAGES_APP_HTTP_PORT } from './settings';
import { logger, loggerMiddleware, odm } from './bin';
import { messages } from './router';
import { odmOptions, odmURI } from './etc';


const app = express();

app.use(loggerMiddleware);
app.use(cors());
app.use(helmet());
app.use(cache('5 minutes'));
app.use('/messages', messages);

odm.connect(odmURI, odmOptions)
  .then((res) => {
    logger.info(res);
    app.listen(MESSAGES_APP_HTTP_PORT);
  })
  .catch(logger.error);
