import { DataTypes } from "sequelize";
import sequelize from "../../../../database.js";

const Cinema = sequelize.define(
  "Cinema",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    cidade: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    estado: {
      type: DataTypes.STRING(2),
      allowNull: false,
    },
  },
  {
    tableName: "cinemas",
    timestamps: false,
  }
);

export { Cinema };
