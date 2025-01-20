class Pessoa{
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

const pessoa = new Pessoa("Isaac", 27);

pessoa.