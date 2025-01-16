// Método funciona como se fosse uma função

class Pessoa{
    nome: string = "";
    idade: number = 0;

    // usamos o inicializador abaixo para chamar a class
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    comer(comida: string){
        return `O(a) ${this.nome} comeu ${comida}`
    }

    fezAniversario(){
        return `O(a) ${this.nome} fez ${++this.idade} anos`
    }
}

const pessoa1 = new Pessoa("Isaac de Jesus", 26);
const pessoa2 = new Pessoa("Perola", 3);

console.log(pessoa1.comer("Feijoada"));
console.log(pessoa1.fezAniversario());

console.log(pessoa2.comer("marcarrão")); 
console.log(pessoa2.fezAniversario());