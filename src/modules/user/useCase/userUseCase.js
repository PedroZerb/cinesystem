import jwt from "jsonwebtoken";
const { sign } = jwt;
import bcrypt from "bcryptjs"; // Adicionado bcrypt
import { AppError } from "../../../shared/errors/appError.js";
import { UserRepository } from "../repository/userRepository.js";

class AuthenticateUserUseCase {
  constructor({ userRepository }) {
    this.userRepository = userRepository;
  }

  async execute(senha, email) {
    const userFind = await this.userRepository.findByEmail(email);

    if (!userFind) {
      throw new AppError("Usuário não existe", 401);
    }

    const passwordMatch = await bcrypt.compare(
      senha,
      userFind.dataValues.senha_hash
    );

    if (!passwordMatch) {
      throw new AppError("Senha do usuário inválida", 401);
    }

    const token = sign({}, process.env.JWT_SECRET, {
      subject: userFind.dataValues.id.toString(),
      expiresIn: 60 * 60 * 2,
    });

    const tokenReturn = {
      status: "sucesso",
      token,
      expiresIn: 60 * 60 * 2,
    };

    return tokenReturn;
  }
}

export { AuthenticateUserUseCase };
