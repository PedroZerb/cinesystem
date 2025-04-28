import { Router } from "express";
import { CinemaController } from "../../../../modules/cinema/controller/cinemaController.js";

const cinemaController = new CinemaController();

const cinemaRouter = Router();

cinemaRouter.post("/", (req, res) =>
  cinemaController.createCinemaController(req, res)
);

cinemaRouter.put("/:id", (req, res) =>
  cinemaController.updateCinemaController(req, res)
);

cinemaRouter.delete("/:id", (req, res) =>
  cinemaController.deleteCinemaController(req, res)
);

cinemaRouter.get("/", (req, res) =>
  cinemaController.getAllCinemasController(req, res)
);

export { cinemaRouter };
