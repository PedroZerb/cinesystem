import { DataTypes } from "sequelize";
import sequelize from "../../../../database.js";
import { Cinema } from "../../cinema/entitie/cinemaEntitie.js";
import { Filme } from "../../filmes/entitie/filmesEntitie.js";

const Sessao = sequelize.define(
  "Sessao",
  {
    id: {
      type: DataTypes.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    cinema_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Cinema,
        key: "id",
      },
    },
    dia_semana: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    filme_id: {
      type: DataTypes.INTEGER,
      allowNull: false,
      references: {
        model: Filme,
        key: "id",
      },
    },
    horario: {
      type: DataTypes.TIME,
      allowNull: false,
    },
  },
  {
    tableName: "sessoes",
    timestamps: false,
  }
);

Sessao.belongsTo(Cinema, { foreignKey: "cinema_id" });
Sessao.belongsTo(Filme, { foreignKey: "filme_id" });

export { Sessao };
