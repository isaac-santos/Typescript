// uma classe TypeScript é uma estrutura de programação orientada a objetos que possui um conjunto de propriedades e métodos.

// A classe é um modelo para criar objetos, permitindo que voçê defina uma estrutura com propriedades e comportamentos.

class Pessoa{
    nome: string = "";
    idade: number = 0;

    // usamos o inicializador abaixo para chamar a class
    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }
}

 const pessoa1 = new Pessoa("Isaac de Jesus", 27);
// const pessoa1 = new Pessoa();
const pessoa2 = new Pessoa("Marisete de Jesus", 65);

console.log(pessoa1.nome);
console.log(pessoa1.idade);

console.log(pessoa2.nome);
console.log(pessoa2.idade);