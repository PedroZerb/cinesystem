import container from "../../../shared/container/container.js";

class sessoesController {
  async createSessaoController(request, response) {
    const { cinema_id, filme_id, dia_semana, horario } = request.body;

    const sessaoUseCase = container.resolve("sessoesUseCase");

    const result = await sessaoUseCase.createSessao({
      cinema_id,
      filme_id,
      dia_semana,
      horario,
    });
    return response.status(201).json(result);
  }

  async updateSessaoController(request, response) {
    const { dia_semana, horario } = request.body;
    const { id } = request.params;

    const sessaoUseCase = container.resolve("sessoesUseCase");

    const result = await sessaoUseCase.updateSessao(id, {
      dia_semana,
      horario,
    });

    return response.status(200).json(result);
  }

  async deleteSessaoController(request, response) {
    const { id } = request.params;

    const sessaoUseCase = container.resolve("sessoesUseCase");

    await sessaoUseCase.deleteSessao({ id });

    return response.status(204).json();
  }

  async getAllSessoesController(request, response) {
    const { page, limit } = request.query;

    const sessoesUseCase = container.resolve("sessoesUseCase");

    const Sessoes = await sessoesUseCase.getAllSessoes({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    return response.status(200).json(Sessoes);
  }
}

export { sessoesController };
