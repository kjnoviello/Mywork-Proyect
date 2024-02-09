import { DataTypes } from "sequelize";
import sequelize from "../config/database.config.js";

const Usuario = sequelize.define(
  "usuario",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    nombre: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    apellido: {
      type: DataTypes.STRING(50),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    password: {
      type: DataTypes.STRING(60),
      allowNull: false,
    },
    avatar: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
    },
    public_id: {
      type: DataTypes.STRING(150),
      allowNull: true,
      defaultValue: null,
    },
    token: {
      type: DataTypes.STRING(60),
      allowNull: true,
      defaultValue: null,
    },
    caducidad_token: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    email_verified_at: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
    status: {
      type: DataTypes.BOOLEAN,
      allowNull: false,
      defaultValue: true,
    },
    ciudad: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
    },
    telefono: {
      type: DataTypes.STRING(21),
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    paranoid: false,
    timestamps: true,
  }
);

export default Usuario;
