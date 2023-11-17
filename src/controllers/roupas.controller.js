import roupaModel from '../models/roupas/roupa.js';
import listaRoupas from '../models/roupas/clothes.js';

const roupas = new listaRoupas();

export const getRoupas = (req, res) => {
    res.send(roupas.getAllclothes());
};

export const getRoupaId = (req, res) => {
    const { id } = req.params;
    const roupa = roupas.getChother(id);
    res.send(roupa);
};

export const addRoupa = (req, res) => {
    const {nome, preco, tamanho, tipo, quantidade, imagem}= req.body;
    validarRoupa(req, res);
    if (validarRoupa) {
        const roupa = new roupaModel(nome, preco, tamanho, tipo, quantidade, imagem);
        roupas.addChother(roupa);
        res.send(`Roupa adicionada com sucesso. ID: ${roupa.id}`);
    }
};
