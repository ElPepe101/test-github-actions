process.env = {
  ...process.env,
  ...process.env.AWS_IMSSTANTE_SECRETS,
};

export const MESSAGES_APP_DB_HOST = process.env.MESSAGES_APP_DB_HOST || 'db';
export const MESSAGES_APP_DB_PORT = process.env.MESSAGES_APP_DB_PORT || 27017;
export const MESSAGES_APP_DB_USER = process.env.MESSAGES_APP_DB_USER;
export const MESSAGES_APP_DB_PASS = process.env.MESSAGES_APP_DB_PASS;
export const MESSAGES_APP_DB_SCHEMA = process.env.MESSAGES_APP_DB_SCHEMA || 'test';
export const MESSAGES_APP_DB_CLUSTER = process.env.MESSAGES_APP_DB_CLUSTER;

export const MESSAGES_APP_HTTP_PORT = process.env.MESSAGES_APP_HTTP_PORT || 80;