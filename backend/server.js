// import sequelize from "./app/config/database.config.js";
import app from "./app/app.js";
import colors from "colors";
import { logger } from "./app/utils/winston.logger.js";

/* sequelize
  .sync({ force: false })
  .then(() => {
    console.log(
      `La conexión a la base de datos se ha establecido con éxito`.bgGreen.white
    );
    logger.info("La conexión a la base de datos se ha establecido con éxito"); */

app.listen(app.get("port"), () => {
  console.log(
    `El servidor se ejecuta en el puerto: ${app.get(
      "port"
    )} sin problemas. En el entorno de: ${app.get("env")}`.green
  );
  logger.debug(
    `El servidor se ejecuta en el puerto: ${app.get(
      "port"
    )} sin problemas. En el entorno de: ${app.get("env")}`
  );
});
/* })
  .catch((error) => {
    console.log(error);
    logger.error(error);
  }); */
