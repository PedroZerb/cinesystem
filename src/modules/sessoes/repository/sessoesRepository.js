import { Sessao } from "../entitie/sessoesEntitie.js";

class SessaoRepository {
  async create(data) {
    return await Sessao.create(data);
  }

  async findAllByCinemaAndDia({ cinema_id, dia_semana }) {
    return await Sessao.findAll({
      where: {
        cinema_id,
        dia_semana,
      },
    });
  }

  async findByFilmeId(filme_id) {
    return await Sessao.findAll({
      where: {
        filme_id,
      },
    });
  }

  async findByCinemaId(cinema_id) {
    return await Sessao.findAll({
      where: {
        cinema_id,
      },
    });
  }

  async findById(id) {
    return await Sessao.findOne({ where: { id } });
  }

  async update(id, data) {
    await Sessao.update(data, { where: { id } });
    return await this.findById(id);
  }

  async delete(id) {
    await Sessao.destroy({ where: { id } });
    return { message: "Sessão deletada com sucesso", id };
  }

  async findAllSessoes(skip, limit, cinema_id) {
    return await Sessao.findAll({
      offset: skip,
      limit: limit,
      where: cinema_id ? { cinema_id } : undefined,
      order: [["id", "ASC"]],
    });
  }
}

export { SessaoRepository };
