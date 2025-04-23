import container from "../../../shared/container/container.js";

class filmesController {
  async createFilmeController(request, response) {
    const { nome, genero, duracao, classificacao, lancamento, sinopse } =
      request.body;

    const filmeUseCase = container.resolve("FilmeUseCase");

    const result = await filmeUseCase.createFilme({
      nome,
      genero,
      duracao,
      classificacao,
      lancamento,
      sinopse,
    });
    return response.status(201).json(result);
  }

  async updateFilmeController(request, response) {
    const { nome, genero, duracao, classificacao, lancamento, sinopse } =
      request.body;
    const { id } = request.params;

    const filmeUseCase = container.resolve("FilmeUseCase");

    const result = await filmeUseCase.updateFilme(id, {
      nome,
      genero,
      duracao,
      classificacao,
      lancamento,
      sinopse,
    });

    return response.status(200).json(result);
  }

  async deleteFilmeController(request, response) {
    const { id } = request.params;

    const filmeUseCase = container.resolve("FilmeUseCase");

    await filmeUseCase.deleteFilme({ id });

    return response.status(204).json();
  }

  async getAllFilmesController(request, response) {
    const { page, limit } = request.query;

    const filmeUseCase = container.resolve("FilmeUseCase");

    const filmes = await filmeUseCase.getAllFilmes({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    return response.status(200).json(filmes);
  }
}

export { filmesController };
