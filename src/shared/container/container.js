import { createContainer, asClass } from "awilix";
import { UserRepository } from "../../modules/user/repository/userRepository.js";
import { AuthenticateUserUseCase } from "../../modules/user/useCase/userUseCase.js";
import { CinemaRepository } from "../../modules/cinema/repository/cinemaRepository.js";
import { CinemaUseCase } from "../../modules/cinema/useCase/cinemaUseCase.js";
import { FilmeUseCase } from "../../modules/filmes/useCase/filmesUseCase.js";
import { FilmeRepository } from "../../modules/filmes/repository/filmesRepository.js";
import { SessaoRepository } from "../../modules/sessoes/repository/sessoesRepository.js";
import { sessoesUseCase } from "../../modules/sessoes/useCase/sessoesUseCase.js";

const container = createContainer();

container.register({
  userRepository: asClass(UserRepository).singleton(),
  authenticateUserUseCase: asClass(AuthenticateUserUseCase).singleton(),
  CinemaRepository: asClass(CinemaRepository).singleton(),
  CinemaUseCase: asClass(CinemaUseCase).singleton(),
  FilmeRepository: asClass(FilmeRepository).singleton(),
  FilmeUseCase: asClass(FilmeUseCase).singleton(),
  SessaoRepository: asClass(SessaoRepository).singleton(),
  sessoesUseCase: asClass(sessoesUseCase).singleton(),
});

export default container;
