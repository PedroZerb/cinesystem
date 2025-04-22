import { AppError } from "../../../shared/errors/appError.js";

class CinemaUseCase {
  constructor({ CinemaRepository }) {
    this.CinemaRepository = CinemaRepository;
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

    console.log(cinema);
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

    console.log(updateCinema);
  }
}

export { CinemaUseCase };
