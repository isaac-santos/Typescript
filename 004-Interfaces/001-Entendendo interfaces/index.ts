/*
  As interfaces TypeScript definem os contratos em seu código.
  Eles também fornecem nomes explícitos para verificação de tipo.
*/

interface IPessoa {
    nome: string,
    idade: number,
    readonly cpf: number,
    enabled(): boolean
}

let pessoa: IPessoa = {
    nome: "Isaac", 
    idade: 27, 
    cpf: 11111111111, 
    enabled: () => {
    return true;
}};


class Joao implements IPessoa {
    nome: string = "João";
    idade: number = 22;

    readonly cpf: number = 111111;
    
    enabled(): boolean {
        return true
    }
}// utiliza um mapa para implementar pessoas