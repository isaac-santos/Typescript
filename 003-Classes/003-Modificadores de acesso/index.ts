/*
  public - Pode ser acessado pela mesma classe, classe filhas e outras classes.
  #############################################################################
  protected - Pode ser acessado pela mesma classe e classes filhas, não pode ser acessado por outras classes.
  #############################################################################
  private - Pode ser acessada somente pela própria classe.
*/
class Pessoa{
    public nome: string = "";
    private idade: number = 0;

    constructor(nome: string, idade: number){
        this.nome = nome;
        this.idade = idade;
    }

    public comer(comida: string){
        return `O(a) ${this.nome} comeu ${comida}`
    }

    protected fezAniversario(){
        return `O(a) ${this.nome} fez ${++this.idade} anos`
    }
}

const pessoa = new Pessoa("Isaac", 27);

pessoa.