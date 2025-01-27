/*
  Classes, métodos e campos no TypeScriptpodem ser abstratos.

  um método abstrato ou campo abstrato é aquele que não teve uma implementação fornecida.

  O papel das classes abstratas é servir como uma classe base para subclasses que implementam todos os membros abstratos.

  Quando uma classe não possui membros abstratos, ela é chamada de concreta.
*/

abstract class Pessoa {
    protected nome: string = "";
    protected idade: number = 0;

    constructor(nome: string, idade: number) {
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string) {
        return `O(a) ${this.nome} comeu ${comida}`
    }

    public fezAniversario() {
        return `O(a) ${this.nome} fez ${++this.idade} anos`
    }

    protected abstract profissao: string;// não precisa retornar, ele obriga a adicionar
    public abstract qualSuaProfissao():string;
    public abstract qualSeuSalario(salario: number): number;
}

class Maria extends Pessoa {
    protected profissao: string = "Programadora";
    
    constructor() {
        super("Maria", 31);
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        // Validações
        return salario
    }
}

class Dener extends Pessoa {
    protected profissao: string = "Programador";
    constructor() {
        super("Dener", 31);
    }

    public qualSuaProfissao(): string {
        return `Sua profissão é ${this.profissao}`;
    }

    public qualSeuSalario(salario: number): number {
        // Validações
        return salario
    }
}