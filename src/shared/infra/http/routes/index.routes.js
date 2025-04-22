import express from "express";
import { userRouter } from "../routes/user.routes.js";
import { cinemaRouter } from "./cinema.js";

const routerIndex = express.Router();

routerIndex.use("/user", userRouter);
routerIndex.use("/cinema", cinemaRouter);

export { routerIndex };
