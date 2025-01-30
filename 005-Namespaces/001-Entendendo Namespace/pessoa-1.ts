/*
  Os Namespaces são uma forma específica do TypeScript para organizar código.
  Namespaces são simplesmente objetos JavaScript nomeados no namespace global.
  Isso torna os namespaces uma construção muito simples de usar.

  anotações:

   ao utilizar namespaces, temos como cadastrar variáveis em arquivos diferentes.

   Com namespace precisamos utilizar o "export" para retornar o conteúdo

   para utilizar o namespace de um arquivo em outro, temos que adicionar o "export" no namespace e depois um "import" no outro arquivo
  . 
*/

export namespace Pessoa1 {
  export let nome = "Sara";

  const data = 1 + 1;

  export const calc = () => {
    return data;
  };
}


