import { Sequelize } from "sequelize";
import dbConfig from "./ormConfig.js";

const sequelize = new Sequelize(dbConfig.development);

try {
  await sequelize.authenticate();
  console.log("Conexão com o banco de dados foi bem-sucedida!");
} catch (error) {
  console.error("Erro ao conectar com o banco de dados:", error);
}

export default sequelize;
