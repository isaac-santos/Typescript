/*
  A palavra chave static define um método estático para a classe.
  Métodos estáticos não são chamados na instãncias da classe.
  Em vez disso, eles são chamados na própria classe.
  Geralmente, são funções utilitárias, como funções para criar ou clonar objetos.
*/

class Utils {
    cloneObject(object: Array<{}>) {
        return JSON.parse(JSON.stringify(Object.assign(object)));
    }
}

// class Pessoa{
//     public variasPessoas(){
//         Utils.cloneObject([..., ..., ...])
//     }
// }

const utils = new Utils()

const tenis1: {tamanho: number, estoque: boolean} = {
    tamanho: 41,
    estoque: true
}

const tenis2: {tamanho: number, estoque: boolean} = {
    tamanho: 45,
    estoque: false
}

console.log(utils.cloneObject([tenis1, tenis2]));