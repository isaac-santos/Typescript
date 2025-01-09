let pedido: string = "Pizza";
pedido = "Isaac de Jesus";

let numero: number = 123;
numero = 123;

let funcionou: boolean = false;
funcionou = true;

// const fun = (value) => {
//     return console.log(value);
// }; 

// desta forma a fun é qualquer um (any)
const fun = (value: string): string => {
    return value;
};// assim só será string, tanto entrada como saida

// fun("Isaac");
// fun(123);

console.log(fun("Isaac"));