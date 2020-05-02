import {
  MESSAGES_APP_DB_HOST,
  MESSAGES_APP_DB_PORT,
  MESSAGES_APP_DB_USER,
  MESSAGES_APP_DB_PASS,
  MESSAGES_APP_DB_SCHEMA,
} from '../settings';

export const odmOptions = {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 10000,
}

const credentials = MESSAGES_APP_DB_USER && MESSAGES_APP_DB_PASS ? `${MESSAGES_APP_DB_USER}:${MESSAGES_APP_DB_PASS}@` : '';
export const odmURI = `mongodb://${credentials}${MESSAGES_APP_DB_HOST}:${MESSAGES_APP_DB_PORT}/${MESSAGES_APP_DB_SCHEMA}?authSource=admin`;
