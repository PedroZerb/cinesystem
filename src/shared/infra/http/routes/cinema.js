import { Router } from "express";
import { CinemaController } from "../../../../modules/cinema/controller/cinemaController.js";

const cinemaController = new CinemaController();

const cinemaRouter = Router();

// Defina o caminho para a rota
cinemaRouter.post("/", (req, res) =>
  cinemaController.createCinemaController(req, res)
);

cinemaRouter.put("/:id", (req, res) =>
  cinemaController.updateCinemaController(req, res)
);

export { cinemaRouter };
