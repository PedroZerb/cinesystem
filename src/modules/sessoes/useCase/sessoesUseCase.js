import { AppError } from "../../../shared/errors/appError.js";

class sessoesUseCase {
  constructor({ SessaoRepository, FilmeRepository, CinemaRepository }) {
    this.SessaoRepository = SessaoRepository;
    this.FilmeRepository = FilmeRepository;
    this.CinemaRepository = CinemaRepository;
  }


  async createSessao({ cinema_id, filme_id, dia_semana, horario }) {
    const cinema = await this.CinemaRepository.findCinemaById(cinema_id);
    if (!cinema) {
      throw new AppError("Esse cinema não existe para criar uma sessão!", 400);
    }
  
    const filmeExist = await this.FilmeRepository.findFilmeById(filme_id);
    if (!filmeExist) {
      throw new AppError("Filme não encontrado.", 404);
    }
  
    console.log("passouuu")
    // Verifica se já existe uma sessão com o mesmo filme, cinema, dia da semana e horário
    const sessaoExist = await this.SessaoRepository.findByCinemaFilmeDiaHorario({
      cinema_id,
      filme_id,
      dia_semana,
      horario
    });
  
    if (sessaoExist) {
      throw new AppError("Já existe uma sessão com esse filme nesse cinema, dia e horário.", 400);
    }
  
    // Se passou por todas as verificações, pode criar a sessão
    const novaSessao = await this.SessaoRepository.create({
      cinema_id,
      filme_id,
      dia_semana,
      horario
    });
  
    return novaSessao;
  }
  

  // async updateFilme(id, { nome, genero, duracao, classificacao, lancamento, sinopse }) {
  
  //   const filmeExist = await this.FilmeRepository.findFilmeById(id);

  //   console.log(filmeExist)
  
  //   if (!filmeExist) {
  //     throw new AppError("Filme não encontrado.", 404);
  //   }
  
  //   const classificacoesValidas = ["Livre", "10", "12", "14", "16", "18"];
  //   if (classificacao && !classificacoesValidas.includes(classificacao)) {
  //     throw new AppError("Classificação inválida. Use uma das classificações permitidas: Livre, 10, 12, 14, 16, 18.", 400);
  //   }
  
  //   if (sinopse && (sinopse.length < 20 || sinopse.length > 200)) {
  //     throw new AppError("A sinopse deve ter no mínimo 20 caracteres e no máximo 200.", 400);
  //   }
  
  //   if (duracao && (duracao < 30 || duracao > 240)) {
  //     throw new AppError("A duração do filme deve ser entre 30 e 240 minutos.", 400);
  //   }
  
  //   const filmeupdate = await this.FilmeRepository.update(id, {
  //     nome: nome ?? filmeExist.nome,
  //     genero: genero ?? filmeExist.genero,
  //     duracao: duracao ?? filmeExist.duracao,
  //     classificacao: classificacao ?? filmeExist.classificacao,
  //     lancamento: lancamento ?? filmeExist.lancamento,
  //     sinopse: sinopse ?? filmeExist.sinopse
  //   });
  
  //   return filmeupdate;
  // }
  

  // async deleteFilme({ id }) {

  //   const filmeExist = await this.FilmeRepository.findFilmeById(id);
  
  //   if (!filmeExist) {
  //     throw new AppError("Esse Filme não existe!", 400);
  //   }

  //   // const sessoes = await this.SessaoRepository.findByCinemaId(id);
  
  //   // if (sessoes.length > 0) {
  //   //   throw new AppError("Não é possível deletar o cinema com sessões associadas!", 400);
  //   // }
  
    
  //   await this.FilmeRepository.deleteFilmeById(id);
   
  // }

  // async getAllFilmes({ page , limit }) {
  
  // if (limit <= 0 || page <= 0) {
  //   throw new AppError("O valor de 'limit' e 'page deve ser um número inteiro positivo.", 400); // lança erro se não houver cinemas
  // }

  // const skip = (page - 1) * limit; 
  // const filmes = await this.FilmeRepository.findAllFilmes(skip, limit);

  // console.log(filmes)
  
  // if (filmes.length === 0) {
  //     throw new AppError("Nenhum cinema encontrado!", 404); // lança erro se não houver cinemas
  // }

  // return filmes

  // }
  
}

export { sessoesUseCase };
