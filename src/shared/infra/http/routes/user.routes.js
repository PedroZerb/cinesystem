import { Router } from "express";
import { UserController } from "../../../../modules/user/controller/userController.js";

const userController = new UserController();

const userRouter = Router();

userRouter.post("/login", (req, res) => userController.handle(req, res));

export { userRouter };
