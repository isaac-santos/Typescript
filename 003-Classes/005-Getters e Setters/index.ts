/*
  Getters e setters são usados para proteger seus dados, especialmente na criação de classes.

  Para cada instância de variável, um método getter retorna seu valor, enquanto um método setter o define ou atualiza.
*/

class Pessoa {
    public nome: string = "";
    public idade: number = 0;
    

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

    
   
    
class Isaac extends Pessoa {
    private _profissao: string = "Programador";
    
    constructor() {
        super("Isaac", 27);
    }

    get profissao(){
        // Função
        // Validar se contem @ / $
        if(this._profissao === "Piloto de Drone"){
            return `Ele não é mais um programador, mudou para ${this._profissao}`;
        }
        
        return this._profissao
    }// não pode ter parametro

    set profissao(valor: string){
        this._profissao = valor;
    }
}


const isaac = new Isaac();
console.log(isaac.profissao)// com get não preciso usar o parentese de função na profissão
isaac.profissao = "Piloto de Drone";
console.log(isaac.profissao);