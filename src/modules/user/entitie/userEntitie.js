// src/models/User.js
import { DataTypes } from "sequelize";
import sequelize from "../../../../database.js";

const User = sequelize.define(
  "User",
  {
    id: {
      type: DataTypes.INTEGER,
      autoIncrement: true,
      primaryKey: true,
    },
    nome: {
      type: DataTypes.STRING(100),
      allowNull: false,
    },
    email: {
      type: DataTypes.STRING(150),
      allowNull: false,
      unique: true,
    },
    senha_hash: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    create_at: {
      type: DataTypes.DATE,
      defaultValue: DataTypes.NOW,
      allowNull: true,
    },
  },
  {
    tableName: "usuarios",
    timestamps: false, // Mantemos false porque a tabela já tem create_at manual
  }
);

export default User;
