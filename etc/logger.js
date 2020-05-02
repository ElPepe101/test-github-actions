import { createLogger, format, transports } from 'winston';


const handler = createLogger({
  level: 'info',
  format: format.combine(
    format.json(),
    format.timestamp(),
  ),
  transports: [
    new transports.Console(),
  ]
});

handler.stream = { 
  write: function(message){ 
    handler.info(message); 
  }
};

export { handler };
