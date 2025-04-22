import container from "../../../shared/container/container.js";

class CinemaController {
  async createCinemaController(request, response) {
    const { nome, cidade, estado } = request.body;

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    console.log(cinemaUserUseCase);

    const result = await cinemaUserUseCase.createCinema(nome, cidade, estado);

    return response.status(200).json(result);
  }

  async updateCinemaController(request, response) {
    const { nome, cidade, estado } = request.body;
    const { id } = request.params;

    console.log("id", id);
    console.log("resto", nome, cidade, estado);

    const cinemaUserUseCase = container.resolve("CinemaUseCase");

    const result = await cinemaUserUseCase.updateCinema({
      id,
      nome,
      cidade,
      estado,
    });

    return response.status(200).json(result);
  }
}

export { CinemaController };
