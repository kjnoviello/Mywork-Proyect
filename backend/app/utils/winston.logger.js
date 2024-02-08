import winston from "winston";
import DailyRotateFile from "winston-daily-rotate-file";
import path from "path";
import dayjs from "dayjs";
const { APP, LOG_LEVEL } = process.env;

const rutaBase = process.cwd();

const transportApi = new DailyRotateFile({
  filename: `${rutaBase}/logs/${APP}-%DATE%.log`,
  datePattern: "DD-MM-YYYY",
  zippedArchive: true,
  maxSize: "10m",
  maxFiles: "15d",
});

const transportApiError = new DailyRotateFile({
  filename: `${rutaBase}/logs/errors-${APP}-%DATE%.log`,
  datePattern: "DD-MM-YYYY",
  zippedArchive: true,
  maxSize: "10m",
  maxFiles: "1d",
  level: "error",
});

const appendTimestamp = winston.format((info) =>
  Object.assign(info, { timestamp: dayjs().format() })
);

const logger = winston.createLogger({
  level: LOG_LEVEL | "info",
  format: winston.format.combine(
    winston.format.splat(),
    winston.format.metadata(),
    appendTimestamp(),
    winston.format.errors({ stack: true }),
    winston.format.json()
  ),
  transports: [transportApi, transportApiError],
});

export { logger };
