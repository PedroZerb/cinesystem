import { AppError } from "../../../shared/errors/appError.js";

class sessoesUseCase {
  constructor({ SessaoRepository, FilmeRepository, CinemaRepository }) {
    this.SessaoRepository = SessaoRepository;
    this.FilmeRepository = FilmeRepository;
    this.CinemaRepository = CinemaRepository;
  }

  async createSessao({ cinema_id, filme_id, dia_semana, horario }) {
    const cinema = await this.CinemaRepository.findCinemaById(cinema_id);
    if (!cinema) {
      throw new AppError("Esse cinema não existe para criar uma sessão!", 400);
    }

    const filmeExist = await this.FilmeRepository.findFilmeById(filme_id);
    if (!filmeExist) {
      throw new AppError("Filme não encontrado.", 404);
    }
    const sessoesofTheDay = await this.SessaoRepository.findAllByCinemaAndDia({
      cinema_id,
      dia_semana,
    });

    if (sessoesofTheDay.length >= 10) {
      throw new AppError(
        "Limite de sessões por dia atingido para esse cinema.",
        400
      );
    }

    const newSessao = await this.SessaoRepository.create({
      cinema_id,
      filme_id,
      dia_semana,
      horario,
    });

    return newSessao;
  }

  async updateSessao(id, { dia_semana, horario }) {
    const sessaoExist = await this.SessaoRepository.findById(id);

    if (!sessaoExist) {
      throw new AppError("Sessão não encontrada.", 404);
    }

    const updatedSessao = await this.SessaoRepository.update(id, {
      dia_semana: dia_semana ?? sessaoExist.dia_semana,
      horario: horario ?? sessaoExist.horario,
    });

    return updatedSessao;
  }

  async deleteSessao({ id }) {
    const sessao = await this.SessaoRepository.findById(id);

    if (!sessao) {
      throw new AppError("Sessão não encontrada.", 404);
    }

    await this.SessaoRepository.delete(id);
  }

  async getAllSessoes({ page, limit, cinema_id }) {
    if (limit <= 0 || page <= 0) {
      throw new AppError(
        "O valor de 'limit' e 'page deve ser um número inteiro positivo.",
        400
      );
    }

    const skip = (page - 1) * limit;
    const sessoes = await this.SessaoRepository.findAllSessoes(
      skip,
      limit,
      cinema_id
    );

    const arraySessionsResponse = [];

    for (const session of sessoes) {
      const filme = await this.FilmeRepository.findFilmeById(session.filme_id);
      const cinema = await this.CinemaRepository.findCinemaById(
        session.cinema_id
      );

      const responseObject = {
        id: session.dataValues.id,
        cinema_id: session.dataValues.cinema_id,
        dia_semana: session.dataValues.dia_semana,
        filme_id: session.dataValues.filme_id,
        horario: session.dataValues.horario,
        nome_filme: filme.dataValues.nome,
        nome_cinema: cinema.dataValues.nome,
      };

      arraySessionsResponse.push(responseObject);
    }

    if (sessoes.length === 0) {
      throw new AppError("Nenhuma sessão encontrada!", 404);
    }

    return arraySessionsResponse;
  }
}

export { sessoesUseCase };
