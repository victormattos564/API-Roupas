import {v4 as uuidv4} from "uuid"

class roupa{
    constructor(name, price, size, type, quantidade, imagem){
        this.id = uuidv4()
        this.name = name;
        this.price = price;
        this.size = size;
        this.type = type;
        this.quantidade = quantidade;
        this.imagem = imagem;
    }
    getname(){
        return this.name
    }
}

export default roupa