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

    // Se passou por todas as verificações, pode criar a sessão
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

  async getAllSessoes({ page, limit }) {
    if (limit <= 0 || page <= 0) {
      throw new AppError(
        "O valor de 'limit' e 'page deve ser um número inteiro positivo.",
        400
      ); // lança erro se não houver cinemas
    }

    const skip = (page - 1) * limit;
    const sessoes = await this.SessaoRepository.findAllSessoes(skip, limit);

    if (sessoes.length === 0) {
      throw new AppError("Nenhuma sessão encontrada!", 404); // lança erro se não houver cinemas
    }

    return sessoes;
  }
}

export { sessoesUseCase };
