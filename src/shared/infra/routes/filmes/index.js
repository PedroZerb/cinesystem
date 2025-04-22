// src/shared/infra/routes/filmes/index.js
import express from 'express';
import moment from 'moment';

const router = express.Router();

router.route('/')
  .get(async (req, res) => {
   console.log("ola")
  })
  .post(async (req, res) => {
    try {
      const nome = req.body.nome?.trim();
      const genero = req.body.genero?.trim();
      const duracao = parseInt(req.body.duracao);
      const classificacao = parseInt(req.body.classificacao);
      const lancamento = moment(req.body.lancamento);
      const sinopse = req.body.sinopse?.trim();

      const result = await req.database.client.query(`
        insert into filme(nome, genero, duracao, classificacao, lancamento, sinopse)
        values ($1, $2, $3, $4, $5, $6)
        returning id
      `, [nome, genero, duracao, classificacao, lancamento, sinopse]);

      const id = result.rows[0].id;
      res.status(201).json({ id });
    } catch (err) {
      res.status(400).json(err);
    }
  });

export default router;
