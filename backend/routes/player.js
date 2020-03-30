import express from 'express';
import { add, getAll, getById } from '../controllers/playerController';
let playerRouter = express.Router();

playerRouter.post('/', add);
playerRouter.get('/', getAll);
playerRouter.get('/:id', getById);

export default playerRouter;
