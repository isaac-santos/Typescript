const erro = (): never => {
    throw new Error("Algo deu errado");
};

const loop = (): never => {
    while(true) {
        console.log("Olá")
    }
};

const validate = (value: string | number) => {

    if(typeof value === "string"){
        return console.log("É um string");
    }else if(typeof value === "number"){
        return console.log("É um number");
    }

    console.log(erro());
}

validate(9);