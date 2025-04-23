import container from "../../../shared/container/container.js";

class sessoesController {
  async createSessaoController(request, response) {
    const  { cinema_id, filme_id, dia_semana, horario} = request.body;

    const sessaoUseCase = container.resolve("sessoesUseCase");

    const result = await sessaoUseCase.createSessao({ cinema_id, filme_id, dia_semana, horario});
    return response.status(201).json(result);
  }

  // async updateFilmeController(request, response) {
  //   const { nome, genero, duracao, classificacao, lancamento, sinopse } = request.body;
  //   const { id } = request.params;

  //   const filmeUseCase = container.resolve("FilmeUseCase");

  //   const result = await filmeUseCase.updateFilme(id, {
  //     nome, genero, duracao, classificacao, lancamento, sinopse
  //   });

  //   return response.status(200).json(result);
  // }

  // async deleteFilmeController(request, response) {
  //   const { id } = request.params;

  //   const filmeUseCase = container.resolve("FilmeUseCase");

  //   await filmeUseCase.deleteFilme({id});

  //   return response.status(204).json()
  // }

  // async getAllFilmesController(request, response) {
  //   const { page , limit  } = request.query;

  //   console.log(page, limit)

  //   const filmeUseCase = container.resolve("FilmeUseCase");
  
  //   const filmes = await filmeUseCase.getAllFilmes({
  //     page: parseInt(page),
  //     limit: parseInt(limit),
  //   });
  
  //   return response.status(200).json(filmes);
  // }
  
  
}

export { sessoesController };
