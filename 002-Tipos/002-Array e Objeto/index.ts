let array1: [string, string, number, boolean] = ["Isaac", "teste", 123, true]// para o array é necessário informa os tipos para cada campo

let array2: Array<string | number | boolean> = [true, "Isaac", 123, "Santos"];// desta maneira, podemos preencher o Array apenas com strings

console.log(array1)
console.log(array2)

let obj1: {nome: string, sobrenome: string, idade: number, casado: boolean} = {
    nome: "Isaac",
    sobrenome: "Santos",
    idade: 27,
    casado: false,
};

let obj2: Array<{nome: string, sobrenome: string, idade: number, casado: boolean}> = [
    {
        nome: "Isaac",
        sobrenome: "Santos",
        idade: 27,
        casado: false,
    },
];

console.log(obj1);
console.log(obj2);