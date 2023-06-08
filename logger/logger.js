import winston from 'winston';

export const logger = winston.createLogger({
  transports: [
    new winston.transports.Console(),
    new winston.transports.File({
      level: 'info',
      filename: 'info.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(),
        winston.format.json())
    }),
    new winston.transports.File({
      level: 'error',
      filename: 'error.log',
      json: true,
      format: winston.format.combine(winston.format.timestamp(),
        winston.format.json())
    })
  ]
});