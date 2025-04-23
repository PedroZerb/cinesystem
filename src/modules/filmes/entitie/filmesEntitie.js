// src/models/Filme.js
import { DataTypes } from "sequelize";
import sequelize from "../../../../database.js";

const Filme = sequelize.define(
  "Filme",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: DataTypes.STRING(255),
      allowNull: false,
    },
    genero: {
      type: DataTypes.STRING(255),
      allowNull: true,
    },
    duracao: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    classificacao: {
      type: DataTypes.INTEGER,
      allowNull: true,
    },
    lancamento: {
      type: DataTypes.DATEONLY,
      allowNull: true,
    },
    sinopse: {
      type: DataTypes.TEXT,
      allowNull: true,
    },
  },
  {
    tableName: "filme",
    timestamps: false,
  }
);

export { Filme };
