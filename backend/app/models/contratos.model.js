import { DataTypes } from "sequelize";
import sequelize from "../config/database.config.js";

const Contratos = sequelize.define(
  "contratos",
  {
    id: {
      type: DataTypes.UUID,
      allowNull: false,
      defaultValue: DataTypes.UUIDV4,
      primaryKey: true,
    },
    deletedAt: {
      type: DataTypes.DATE,
      allowNull: true,
      defaultValue: null,
    },
  },
  {
    paranoid: true,
    timestamps: true,
    tableName: "contratos",
  }
);
export default Contratos;
