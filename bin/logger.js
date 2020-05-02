import morgan from 'morgan';

import { handler } from '../etc/logger';

export const logger = handler;
export const loggerMiddleware = morgan('combined', { stream: handler.stream });