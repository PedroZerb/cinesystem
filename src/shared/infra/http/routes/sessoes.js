import { Router } from "express";
import { sessoesController } from "../../../../modules/sessoes/controller/sessoesController.js";

const SessoesController = new sessoesController();

const sessoesRouter = Router();

// Defina o caminho para a rota
sessoesRouter.post("/", (req, res) =>
  SessoesController.createSessaoController(req, res)
);

sessoesRouter.put("/:id", (req, res) =>
  SessoesController.updateSessaoController(req, res)
);

sessoesRouter.delete("/:id", (req, res) =>
  SessoesController.deleteSessaoController(req, res)
);

sessoesRouter.get("/", (req, res) =>
  SessoesController.getAllSessoesController(req, res)
);

export { sessoesRouter };
