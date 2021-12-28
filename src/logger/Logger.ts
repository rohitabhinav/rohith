import winston from 'winston';

export class Logger {
    dbInsertionerror(...messages: any[]) {
        this.logger.warn('\u{274E} ', messages, '\n');
    }
    private logger: winston.Logger;

    private messageConverter(obj: any) {
        if (typeof obj === 'object') {
            return JSON.stringify(obj);
        }
        return obj;
    }
    
    constructor() {
        this.logger = winston.createLogger({
            format: winston.format.combine(
                winston.format.colorize(),
                winston.format.timestamp({
                  format: 'YYYY-MM-DD HH:mm:ss'
                }),
                winston.format.printf(info => `${info.timestamp} ${info.level}: ${this.messageConverter(info)} \n`)
              ),
            defaultMeta: { },
            transports: [
                new winston.transports.File({ filename: 'info.log', dirname: 'logs', maxsize: 10000, level: 'info' }),
                new winston.transports.File({ filename: 'debug.log', dirname: 'logs', maxsize: 10000, level: 'debug' }),
                new winston.transports.File({ filename: 'warn.log', dirname: 'logs', maxsize: 10000, level: 'warn' }),
                new winston.transports.File({ filename: 'error.log', dirname: 'logs', maxsize: 10000, level: 'error' }),
                new winston.transports.Console({ level: 'debug' })
            ]
        })
        this.logger.exceptions.handle(
            new winston.transports.File({ filename: 'exceptions.log', dirname: 'logs' }),
            new winston.transports.Console()
        );
    }

    log(...messages: any[]) {
        this.logger.debug('\u{1F590} ', messages, '\n');
    }

    info(...messages: any[]) {
        this.logger.info('\u{2139} ', messages, '\n');
    }

    warn(...messages: any[]) {
        this.logger.warn('\u{1F525} ', messages, '\n');
    }

    error(...messages: any[]) {
        this.logger.error('\u{274E} ', messages, '\n');
    }
}