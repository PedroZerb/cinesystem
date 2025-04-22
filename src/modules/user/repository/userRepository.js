// src/repositories/UserRepository.js
import User from "../entitie/userEntitie.js";

class UserRepository {
  async create(data) {
    return await User.create(data);
  }

  async findByEmail(email) {
    return await User.findOne({ where: { email } });
  }
}

export { UserRepository };
