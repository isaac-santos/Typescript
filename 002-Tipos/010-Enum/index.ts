//não é um tipo, é um aglutinador de dados, ele padroniza para que não precise escrever tanta coisa repetida

enum EMes{
    JAN = "Janeiro",
    FEV = "Fevereiro",
    MAR = "Março",
}

// console.log(EMes.JAN);

const pessoa: {nome: string, mesAniversario: string} = {

    nome: "Isaac",
    mesAniversario: EMes.FEV,
};

if(pessoa.mesAniversario === EMes.FEV) {
    console.log(pessoa);
}