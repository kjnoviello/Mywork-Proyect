# MyWork - Backend

Bakend hecho con NodeJS con el framework de express y el orm de sequelize consumiendo una base de datos en mysql para el proyecto de MyWorks

## Tecnologias usadas

**Server:** Node, Express, Sequelize, MySQL

## Variables de entornos

Para ejecutar este proyecto, deberá agregar las siguientes variables de entorno a su archivo `.env` en la raiz del proyecto en la carpeta backend. O copiar el archivo `.env.example` y renombrarlo como `.env`

`TZ`

`API_PORT`

`JWT_SECRET`

`NODE_ENV`

`DB_USER`

`DB_PASS`

`DB_NAME`

`DB_HOST`

`DB_PORT`

`DB_DIALECT`

`LOG_LEVEL`

`API_HOST`

`HOST_FRONT`

`APP`

### Pre-requisitos 📋

Para poder ejecutar bien este proyecto se necesita tener instalado la version de node LTS

```
Node v20.10.0. Se descarga en: https://nodejs.org/en
```

## Ejecutar localmente el servidor

Clonar el proyecto

```bash
  git clone https://github.com/AlexisPieropan/Mywork-Proyect.git MyWork
```

Ir al directorio del proyecto general

```bash
  cd MyWork
```

Dentro directorio del proyecto general ir a la carpeta backend

```bash
  cd backend
```

Instalar dependencias

```bash
  npm install
```

Copiar el archivo `.env.example` en `.env` para que el proyecto funcione

```bash
  cp .env.example .env
```

**_Tanto en linux como en Windows los comandos son iguales_**

Luego rellenar todos los campos del `.env` para que el proyecto funcione.

Iniciar el servidor

```bash
  npm run dev
```

Ir al navegador/postman/frontend y pegar la siguiente ruta

```bash
  http://localhost:8080/
```

**_El puerto se setea en el archivo `.env` si no por defecto es el 8080_**

## Mapa de la aplicación

Así se encuentra organizado el proyecto en cuestión.

```
📁 backend/
├───📁 app/
│   ├───📁 config/
│   │   └───📄 .gitkeep
│   ├───📁 controllers/
│   │   └───📄 .gitkeep
│   ├───📁 helpers/
│   │   └───📄 .gitkeep
│   ├───📁 mails/
│   |   ├───📁 pages/
│   │   |   └───📄 .gitkeep
│   │   └───📄.gitkeep
│   ├───📁 middlewares/
│   │   └───📄 .gitkeep
│   ├───📁 models/
│   │   └───📄 .gitkeep
│   ├───📁 repositories/
│   |   ├───📁 irepositories/
│   │   |   └───📄 .gitkeep
│   │   └───📄 .gitkeep
│   ├───📁 routes/
│   │   └───📄 .gitkeep
│   ├───📁 services/
│   │   └───📄 .gitkeep
│   ├───📁 utils/
│   │   └───📄 .gitkeep
│   └───📁 validations/
│       └───📄 .gitkeep
├───📄 .env.example
├───📄 .gitignore
├───📄 package-lock.json
├───📄 package.json
├───📄 README.md
└───📄 server.js
```

## Quien desarrollo esta api

- [@FabrizioFerroni](https://www.github.com/FabrizioFerroni)
