import {
  MESSAGES_APP_DB_HOST,
  MESSAGES_APP_DB_USER,
  MESSAGES_APP_DB_PASS,
  MESSAGES_APP_DB_SCHEMA,
  MESSAGES_APP_DB_CLUSTER,
} from '../settings';

export const odmOptions = {
  useNewUrlParser: true,
  // useUnifiedTopology: true,
  reconnectTries: Number.MAX_VALUE,
  reconnectInterval: 500,
  connectTimeoutMS: 3000,
}

const credentials = MESSAGES_APP_DB_USER && MESSAGES_APP_DB_PASS ? `${MESSAGES_APP_DB_USER}:${MESSAGES_APP_DB_PASS}@` : '';
const sufix = !MESSAGES_APP_DB_CLUSTER ? '+srv' : '';
export const odmURI = `mongodb${sufix}://${credentials}${MESSAGES_APP_DB_HOST}/${MESSAGES_APP_DB_SCHEMA}?retryWrites=true&w=majority`;
