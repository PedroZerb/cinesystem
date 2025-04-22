import express from 'express';
import filmesRouter from './filmes/index.js';

const router = express.Router();

router.use('/filmes', filmesRouter);

export default router;
