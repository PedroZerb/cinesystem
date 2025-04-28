import { AppError } from "../../../shared/errors/appError.js";

class CinemaUseCase {
  constructor({ CinemaRepository, SessaoRepository }) {
    this.CinemaRepository = CinemaRepository;
    this.SessaoRepository = SessaoRepository;
  }

  async createCinema(nome, cidade, estado) {
    if (!nome || !cidade || !estado) {
      throw new AppError("Os campos são obrigatórios", 400);
    }

    const existCinemaInCity = await this.CinemaRepository.findByNameAndCity(
      nome,
      cidade
    );

    if (existCinemaInCity.length > 0) {
      throw new AppError("Esse cinema já existe nessa cidade!", 400);
    }

    const CountCinemasState = await this.CinemaRepository.CountCinemasState(
      estado
    );

    if (CountCinemasState >= 10) {
      throw new AppError("Limite de cinemas por estado atingido.", 400);
    }

    const createCinema = await this.CinemaRepository.create({
      nome: nome,
      cidade: cidade,
      estado: estado,
    });

    return createCinema;
  }

  async updateCinema({ id, nome, cidade, estado }) {
    const cinema = await this.CinemaRepository.findCinemaById(id);

    if (!cinema) {
      throw new AppError("Esse cinema não existe!", 400);
    }

    const existCinemaInCity = await this.CinemaRepository.findByNameAndCity(
      nome,
      cidade
    );

    if (existCinemaInCity.length > 0) {
      throw new AppError("Esse cinema já existe nessa cidade!", 400);
    }

    const updateCinema = await this.CinemaRepository.updateById(id, {
      nome,
      cidade,
      estado,
    });
  }

  async deleteCinema({ id }) {
    const cinema = await this.CinemaRepository.findCinemaById(id);

    if (!cinema) {
      throw new AppError("Esse cinema não existe!", 400);
    }

    const sessoes = await this.SessaoRepository.findByCinemaId(id);

    if (sessoes.length > 0) {
      throw new AppError(
        "Não é possível deletar um cinema com sessões associadas!",
        400
      );
    }

    await this.CinemaRepository.deleteCinemaById(id);
  }

  async getAllCinemas({ page, limit }) {
    if (limit <= 0 || page <= 0) {
      throw new AppError(
        "O valor de 'limit' e 'page deve ser um número inteiro positivo.",
        400
      );
    }

    const skip = (page - 1) * limit;
    const [cinemas, total] = await Promise.all([
      this.CinemaRepository.findAllCinemas(skip, limit),
      this.CinemaRepository.countAllCinemas(),
    ]);

    if (cinemas.length === 0) {
      throw new AppError("Nenhum cinema encontrado!", 404);
    }

    return {
      cinemas,
      total,
    };
  }
}

export { CinemaUseCase };
