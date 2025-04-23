import { Sessao } from "../entitie/sessoesEntitie.js";

class SessaoRepository {
  async create(data) {
    return await Sessao.create(data);
  }

  async findByCinemaFilmeDiaHorario({ cinema_id, filme_id, dia_semana, horario }) {
    return await Sessao.findOne({
      where: {
        cinema_id,
        filme_id,
        dia_semana,
        horario
      }
    });
  }
  
  
}

export { SessaoRepository };
