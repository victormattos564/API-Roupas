import listaRoupas from "../models/roupa/Clothing.js"
import roupaModel from "../models/roupa/Roupas.js"

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

export const validarClothing = (req, res) => {
    const { name, price, size, type, quantidade, imagem } = req.body;
    if (name.length < 6 || name.length > 40) {
        res.send('O nome do item deve ter no mínimo 6 caracteres e no máximo 40 caracteres');
        return false
    } else if (type.length > 50) {
        res.send('O type do item deve ser uma string com no máximo 50 caracteres');
        return false
    } else if (size !== 'PP' && size !== 'P' && size !== 'M' && size !== 'G' && size !== 'GG' && size !== 'XG') {
        res.send('O size do item deve ser apenas as strings PP, P, M, G, GG e XG');
        return false
    } else if (quantidade < 0 || quantidade > 15000) {
        res.send('A quantidade em estoque deve ser um número inteiro positivo limitado a 15000');
        return false
    } else if (imagem.length < 6 || imagem.length > 40) {
        res.send('A imagem do item deve ser uma URL válida');
        return false
    }else if (name === '' || price === '' || size === '' || type === '' || quantidade === '' || imagem === '') {
        res.send('Todos os campos devem ser preenchidos');
        return false
    }  else {
        return true
    }
};

export const getRoupasporTipo = (req, res) => {
    const { type } = req.params;
    const roupaPorTipo = roupas.getAllclothes().filter((roupa) => roupa.type == type)
    res.send(roupaPorTipo);
}

export const getRoupaporTamanho = (req,res) => {
    const { size } = req.params;
    const roupaPorTamanho = roupas.getAllclothes().filter((roupa) => roupa.size == size)
    res.send(roupaPorTamanho);
}