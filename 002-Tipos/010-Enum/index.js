//não é um tipo, é um aglutinador de dados, ele padroniza para que não precise escrever tanta coisa repetida
var EMes;
(function (EMes) {
    EMes["JAN"] = "Janeiro";
    EMes["FEV"] = "Fevereiro";
    EMes["MAR"] = "Mar\u00E7o";
})(EMes || (EMes = {}));
// console.log(EMes.JAN);
var pessoa = {
    nome: "Isaac",
    mesAniversario: EMes.FEV,
};
if (pessoa.mesAniversario === EMes.FEV) {
    console.log(pessoa);
}
