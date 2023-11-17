import {v4 as uuidv4} from "uuid"

class Roupa{
    constructor(name, price, size, type, quantidade, imagem){
        this.id = uuidv4()
        this.name = name;
        this.price = price;
        this.size = size;
        this.type = type;
        this.quantidade = quantidade;
        this.imagem = imagem;   
    }
}

export default Roupa