// src/repositories/UserRepository.js
import { Cinema } from "../entitie/cinemaEntitie.js";

class CinemaRepository {
  async create(data) {
    return await Cinema.create(data);
  }

  async findByNameAndCity(nome, cidade) {
    return await Cinema.findAll({ where: { nome, cidade } });
  }

  async CountCinemasState(estado) {
    return await Cinema.count({ where: { estado } });
  }

  async findCinemaById(id) {
    return await Cinema.findOne({ where: { id } });
  }

  async updateById(id, data) {
    const [rowsUpdated] = await Cinema.update(data, {
      where: { id },
    });

    return rowsUpdated > 0;
  }
}

export { CinemaRepository };
