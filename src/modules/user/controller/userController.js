import container from "../../../shared/container/container.js";

class UserController {
  async handle(request, response) {
    const { senha, email } = request.body;

    console.log("chegou no controller");

    const authenticateUserUseCase = container.resolve(
      "authenticateUserUseCase"
    );

    const result = await authenticateUserUseCase.execute(senha, email);

    return response.status(200).json(result);
  }
}

export { UserController };
