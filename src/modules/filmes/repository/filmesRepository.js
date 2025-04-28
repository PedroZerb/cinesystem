import { Filme } from "../entitie/filmesEntitie.js";

class FilmeRepository {
  async create(data) {
    return await Filme.create(data);
  }

  async findFilmeById(id) {
    return await Filme.findOne({ where: { id } });
  }

  async update(id, data) {
    await Filme.update(data, { where: { id } });
    return await this.findFilmeById(id);
  }
  async deleteFilmeById(id) {
    return await Filme.destroy({ where: { id } });
  }

  async findAllFilmes(skip, limit) {
    return await Filme.findAll({
      offset: skip,
      limit: limit,
      order: [['id', 'DESC']], // ordenação opcional
    });
  }

  async countAllFilmes() {
    return await Filme.count(); // Conta todos os cinemas
  }
}

export { FilmeRepository };
