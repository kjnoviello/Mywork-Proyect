import sequelize from "./app/config/database.config.js";
import app from "./app/app.js";
import colors from "colors";
import { logger } from "./app/utils/winston.logger.js";
import Rol from "./app/models/rol.model.js";
import Usuario from "./app/models/usuario.model.js";
import bcrypt from "bcryptjs";

const createRoleIfNotExists = async (roleName) => {
  const role = await Rol.findOne({ where: { nombre: roleName } });

  if (!role) {
    // El rol no existe, se crea automáticamente
    await Rol.create({ nombre: roleName });
    console.log(`El rol '${roleName}' se ha creado correctamente.`);
    logger.info(`El rol '${roleName}' se ha creado correctamente`);
  } else {
    console.log(`El rol '${roleName}' ya existe.`);
    logger.info(`El rol '${roleName}' ya existe.`);
  }
};

let userCreated = false;
const syncAndCreateUser = async () => {
  try {
    const userRegister = await Usuario.findOne({
      where: { email: "admin@myworks.com" },
    });
    if (userRegister) {
      userCreated = true;
    }

    // Verifica si el usuario ya fue creado previamente
    if (!userCreated) {
      const rol = await Rol.findOne({ where: { nombre: "admin" } });
      const user = await Usuario.create({
        nombre: "Admin",
        apellido: "MyWorks",
        email: "admin@myworks.com",
        password: bcrypt.hashSync("Test1234#", 10),
        avatar:
          "https://res.cloudinary.com/fabrizio-dev/image/upload/v1694810559/santex/usuarios/default-user.webp",
        email_verified_at: new Date(),
        status: 1,
        ciudad: "Córdoba",
        telefono: "540351152345678",
        IdRol: rol.id,
      });
      logger.info(
        `Se genero el usuario admin por defecto en la bd. Su id es: ${user.id}`
      );
      console.log(
        `Se genero el usuario admin por defecto en la bd. \r\nSu id es: ${user.id}`
      );
      userCreated = true;
    }
  } catch (error) {
    console.error("Error al sincronizar y crear el usuario:", error);
  }
};

sequelize
  .sync({ force: false })
  .then(() => {
    console.log(
      `La conexión a la base de datos se ha establecido con éxito`.bgGreen.white
    );
    logger.info("La conexión a la base de datos se ha establecido con éxito");

    createRoleIfNotExists("admin");
    createRoleIfNotExists("cliente");
    createRoleIfNotExists("profesional");

    syncAndCreateUser();

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
  })
  .catch((error) => {
    console.log(error);
    logger.error(error);
  });
