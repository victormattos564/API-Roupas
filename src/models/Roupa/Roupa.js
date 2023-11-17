import {v4 as uuidv4} from "uuid"

export default class Roupas {
    constructor(nome, tipo, tamanho, valor, estoque) {
        this.id = uuidv4();
        this.nome = nome;
        this.tipo = tipo;
        this.tamanho = tamanho;
        this.valor = valor;
        this.estoque = estoque;
    }
    generateId(){
        return uuidv4();
    }
}