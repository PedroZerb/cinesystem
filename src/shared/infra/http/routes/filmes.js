import { Router } from "express";
import { filmesController } from "../../../../modules/filmes/controller/filmesController.js";

const FilmesController = new filmesController();

const filmesRouter = Router();

filmesRouter.post("/", (req, res) =>
  FilmesController.createFilmeController(req, res)
);

filmesRouter.put("/:id", (req, res) =>
  FilmesController.updateFilmeController(req, res)
);

filmesRouter.delete("/:id", (req, res) =>
  FilmesController.deleteFilmeController(req, res)
);

filmesRouter.get("/", (req, res) =>
  FilmesController.getAllFilmesController(req, res)
);

export { filmesRouter };
