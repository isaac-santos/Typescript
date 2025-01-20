

class Pessoa {
    public nome: string = "";
    public idade: number = 0;
    private _profissao: string = "Programador";// quando tem um "_" é um private

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O(a) ${this.nome} comeu ${comida}`
    }

    public fezAniversario(){
        return `O(a) ${this.nome} fez ${++this.idade} anos`
    }
}
// com o extends fazemos com que a outra class erde os dados da class Pessoa
// class Isaac extends Pessoa {

// }

class Jessica extends Pessoa {
    constructor() {
        super("Jessica", 25);
    }
}

class Isaac extends Pessoa {
    constructor() {
        super("Isaac", 27);
    }

    public profissao(){
        return `${this.nome} trabalha como programador`;
    }
}

// const isaac = new Isaac("Isaac", 27);
const isaac = new Isaac();
const jessica = new Jessica();

console.log(isaac.nome)
console.log(isaac.idade)
console.log(isaac.profissao())

console.log(jessica.nome)
console.log(jessica.idade)