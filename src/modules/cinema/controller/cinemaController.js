import container from "../../../shared/container/container.js";

class CinemaController {
  async createCinemaController(request, response) {
    const { nome, cidade, estado } = request.body;

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    const result = await cinemaUserUseCase.createCinema(nome, cidade, estado);

    return response.status(201).json(result);
  }

  async updateCinemaController(request, response) {
    const { nome, cidade, estado } = request.body;
    const { id } = request.params;

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    const result = await cinemaUserUseCase.updateCinema({
      id,
      nome,
      cidade,
      estado,
    });

    return response.status(200).json(result);
  }

  async deleteCinemaController(request, response) {
    const { id } = request.params;

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    const result = await cinemaUserUseCase.deleteCinema({ id });

    return response.status(204).json();
  }

  async getAllCinemasController(request, response) {
    const { page, limit } = request.query;

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    const cinemas = await cinemaUserUseCase.getAllCinemas({
      page: parseInt(page),
      limit: parseInt(limit),
    });

    return response.status(200).json(cinemas);
  }
}

export { CinemaController };
