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

  async deleteCinemaById(id) {
    const rowsDeleted = await Cinema.destroy({
      where: { id },
    });
    return rowsDeleted > 0;
  }

  async findAllCinemas(skip, limit) {
    return await Cinema.findAll({
      offset: skip,
      limit: limit,
      order: [['id', 'DESC']], // ordenação opcional
    });
  }

  async countAllCinemas() {
    return await Cinema.count(); // Conta todos os cinemas
  }
}

export { CinemaRepository };
