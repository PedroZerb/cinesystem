import { createContainer, asClass } from "awilix";
import { UserRepository } from "../../modules/user/repository/userRepository.js";
import { AuthenticateUserUseCase } from "../../modules/user/useCase/userUseCase.js";
import { CinemaRepository } from "../../modules/cinema/repository/cinemaRepository.js";
import { CinemaUseCase } from "../../modules/cinema/useCase/cinemaUseCase.js";

const container = createContainer();

container.register({
  userRepository: asClass(UserRepository).singleton(),
  authenticateUserUseCase: asClass(AuthenticateUserUseCase).singleton(),
  CinemaRepository: asClass(CinemaRepository).singleton(),
  CinemaUseCase: asClass(CinemaUseCase).singleton(),
});

export default container;
