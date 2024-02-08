import { cleanEnv, str, bool, port, host, num } from "envalid";
import { config } from "dotenv";
config();

const validate = cleanEnv(process.env, {
  APP: str(),
  API_PORT: port(),
  API_HOST: host(),
  NODE_ENV: str({ choices: ["dev", "prod", "test"] }),
  DB_URI: str(),
  DB_HOST: host(),
  DB_PORT: port(),
  DB_USER: str(),
  DB_PASS: str(),
  DB_NAME: str(),
  DB_DIALECT: str(),
  SSL: bool(),
  LOG_LEVEL: str({ choices: ["debug", "info", "error"] }),
  HOST_FRONT: str(),
  JWT_SECRET: str(),
  API_PROTOCOL: str(),
  TZ: str(),
  PAGE_SIZE: num(),
});

export default validate;
