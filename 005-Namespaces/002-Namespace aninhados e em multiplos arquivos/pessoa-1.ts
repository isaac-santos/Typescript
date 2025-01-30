/*
  
*/

namespace Pessoa{
  export namespace Pessoa1 {
    export let nome = "Sara";

    const data = 1 + 1;

    export const calc = () => {
      return data;
    };
  }

  export namespace Pessoa2 {
    export let nome = "Marcos";

    const data = 3 + 1;

    export const calc = () => {
      return data;
    };
  }
}

console.log(Pessoa.Pessoa1.nome);
console.log(Pessoa.Pessoa1.calc());
console.log(Pessoa.Pessoa2.nome);
console.log(Pessoa.Pessoa2.calc());