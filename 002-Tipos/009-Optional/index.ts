//deixa um dado opcional
const fn = (nome: string, idade?: number) => {
    if(!idade){
        return `nome: ${nome}, idade: sem valor definido`;
    };
    return `nome: ${nome}, idade: ${idade}`;
};

console.log(fn("Isaac", 27));
console.log(fn("Isaac"));

const pessoa: {nome: string; idade?: number} = {nome: "Isaac", idade: 31};