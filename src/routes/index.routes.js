import {Router} from 'express'
import roupas from "../routes/roupas.routes.js"

const rotas = Router();

rotas.use('/roupas', roupas);
rotas.use('/roupas/:id', roupas);


rotas.get('/', (req, res)=>{
    return res.status(200).send({message: 'Servidor ok!'})
})

export default rotas