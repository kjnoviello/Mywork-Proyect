import express from "express";
import { config } from "dotenv";
import morgan from "morgan";
import cors from "cors";
import bodyParser from "body-parser";
import validate from "./utils/validateEnv.js";
import { logger } from "./utils/winston.logger.js";
import helmet from "helmet";
import router from "./routes/index.routes.js";
config();

const { TZ, API_PORT, HOST_FRONT, NODE_ENV } = process.env;

const tz = TZ || "America/Argentina/Cordoba";
const app = express();
const entorno = NODE_ENV || "dev";
const url_front = HOST_FRONT || "*";

validate;

// Cors configuration
const whitelist = url_front.split(" ");
let corsOptions = {
  origin(origin, callback) {
    if (whitelist.indexOf(origin) !== -1 || !origin) {
      callback(null, true);
    } else {
      logger.error("No permitido por CORS", { origin });
      callback(new Error("No permitido por CORS"));
    }
  },
};

app.disable("x-powered-by");

app.use(cors(corsOptions));

// Helmet
app.use(helmet());
app.use(helmet.ieNoOpen());
// Sets "Strict-Transport-Security: max-age=5184000; includeSubDomains".
const sixtyDaysInSeconds = 5184000;
app.use(
  helmet.hsts({
    maxAge: sixtyDaysInSeconds,
  })
);
// Sets "X-Content-Type-Options: nosniff".
app.use(helmet.noSniff());
app.use(helmet.frameguard({ action: "deny" }));

app.use(morgan(entorno));

// parse requests of content-type - application/json
app.use(bodyParser.json({ extended: true }));

// parse requests of content-type - application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ limit: "50mb", extended: true }));

app.set("env", entorno);
app.set("port", API_PORT || 8080);
app.use(express.json());
app.use("/", router);

if (entorno === "prod") {
  app.set("trust proxy", 1); // trust first proxy
}

// Importamos los modelos
import "./models/relaciones.model.js";
import "./models/rol.model.js";
import "./models/usuario.model.js";
import "./models/profesional.model.js";
import "./models/servicios.model.js";
import "./models/tarifa.model.js";
import "./models/contratos.model.js";
import "./models/resenias.model.js";

app.use((req, res, next) => {
  req.timezone = tz; // Establece la zona horaria deseada
  next();
});

app.get("/favicon.ico", (req, res) => res.status(204));

export default app;
