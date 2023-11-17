import {Router} from 'express'
import {getRoupaId, getRoupas, addRoupa, deleteRoupa, updateRoupa, getRoupaporTamanho,getRoupasporTipo} from "../controllers/roupas.controller.js"
const roupas = Router();

roupas.get('/', getRoupas);
roupas.get('/:id', getRoupaId);
roupas.post('/', addRoupa);
roupas.delete('/:id', deleteRoupa);
roupas.put('/:id', updateRoupa);
roupas.get('/size/:size', getRoupaporTamanho);
roupas.get('/type/:type', getRoupasporTipo);
export default roupas