import express from "express";
import { userRouter } from "../routes/user.routes.js";
import { cinemaRouter } from "./cinema.js";
import { filmesRouter } from "./filmes.js";
import { sessoesRouter } from "./sessoes.js";

const routerIndex = express.Router();

routerIndex.use("/user", userRouter);
routerIndex.use("/cinema", cinemaRouter);
routerIndex.use("/filmes", filmesRouter);
routerIndex.use("/sessoes", sessoesRouter);

export { routerIndex };
