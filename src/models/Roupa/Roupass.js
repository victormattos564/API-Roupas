export class RoupasRepository {
    constructor(){
        this.Roupas = [];
    }
    getRoupas () {
        return this.Roupa;
    }

    getRoupasId(id) {
        return this.Roupa.find((Roupa) => Roupa.id === id);
    }

    addRoupas () {
        this.Roupa.push(Roupa);
    }
}