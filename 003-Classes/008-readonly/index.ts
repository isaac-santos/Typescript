/*
  não pode mudar a variável  
*/

class Pessoa {
    public readonly nome: string = "Isaac de Jesus"
}

let pessoa = new Pessoa();

console.log(pessoa.nome);
pessoa.nome = "Mariazinha";
console.log(pessoa.nome);