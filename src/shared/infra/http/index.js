import "express-async-errors";
import "dotenv/config";
import sequelize from "../../../../database.js";
import express from "express";
import cors from "cors";
import { routerIndex } from "../http/routes/index.routes.js";
import { AppError } from "../../errors/appError.js";

const app = express();
const port = 8000;

// Colocando o middleware express.json() antes das rotas
app.use(express.json()); // Middleware para parsing do corpo da requisição JSON
app.use(cors()); // Middleware para CORS

app.use(routerIndex); // Suas rotas vêm depois

app.use(
  // eslint-disable-next-line no-unused-vars
  (err, _request, response, _next) => {
    if (err instanceof AppError) {
      return response.status(err.statusCode).json(err);
    }

    return response.status(500).json({
      message: `Internal server error - ${err.message}`,
      statusCode: 500,
      errorCode: 999,
    });
  }
);

app.listen(port, () => {
  console.log(`backend server listening on port ${port}`);
});
