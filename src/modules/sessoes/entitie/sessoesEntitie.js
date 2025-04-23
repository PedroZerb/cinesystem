// src/models/Filme.js
import { DataTypes } from "sequelize";
import sequelize from "../../../../database.js";
import { Cinema } from "../../cinema/entitie/cinemaEntitie.js";
import { Filme } from "../../filmes/entitie/filmesEntitie.js";  // A importação do Filme está correta

const Sessao = sequelize.define('Sessao', {
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true
  },
  cinema_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Cinema, // Refere-se à tabela Cinema
      key: 'id' // A chave primária da tabela Cinema
    }
  },
  dia_semana: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  filme_id: {
    type: DataTypes.INTEGER,
    allowNull: false,
    references: {
      model: Filme, // Refere-se à tabela Filme
      key: 'id' // A chave primária da tabela Filme
    }
  },
  horario: {
    type: DataTypes.TIME,
    allowNull: false,
  }
}, {
  tableName: 'sessoes',
  timestamps: false,
});

// Relacionamento com a tabela Cinema
Sessao.belongsTo(Cinema, { foreignKey: 'cinema_id' });
// Relacionamento com a tabela Filme
Sessao.belongsTo(Filme, { foreignKey: 'filme_id' });  // Relacionamento com a tabela Filme

export { Sessao };