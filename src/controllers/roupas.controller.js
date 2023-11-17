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
    const {nome, price, size, type, quantidade, imagem}= req.body;
    validarClothing(req, res);
    if (validarClothing) {
        const roupa = new roupaModel(nome, price, size, type, quantidade, imagem);
        roupas.addChother(roupa);
        res.send(`Roupa adicionada com sucesso. ID: ${roupa.id}`);
    }
};

export const deleteRoupa = (req, res) => {
    const { id } = req.params;
    roupas.remove(id);
    res.send(`Roupa deletada com sucesso. ID: ${id}`);
};

export const updateRoupa = (req, res) => {
    const { id } = req.params;
    const { name, price, size, type, quantidade, imagem } = req.body;
    const roupaAtualizada = {
        id,
        name,
        price,
        size,
        type,
        quantidade,
        imagem
    };
    validarClothing(req, res);
    if (validarClothing) {
           roupas.update(id, roupaAtualizada);
    res.send(`Roupa atualizada com sucesso. ID: ${id}`); 
    }
};

