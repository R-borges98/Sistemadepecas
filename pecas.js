var listaDePecas=["Filtro de Ar","Motor","Amortecedor"]

if (listaDePecas.length < 10) {
   //É possivel cadastrar 
    console.log("É possivel cadastrar mais peças")
} else {
    console.log("Não tem mais espaço na lista")
}


let peso = 50;
if(Peso<100){
    console.log("A peça deve pesar no minimo 100g")
}else {
  console.log("A peça possui peso adequado")
}   


let Nomepeca ="Disco de freio"
if (Nomepeca.length>3){
    console.log("Nome esta adequado para o cadastro!")
}else if(Nomepeca.length==0){
     console.log("O nome da peça não pode ser vazio")
}else{

}

switch(Nomepeca.length){
    case 0:
    console.log("O nome da peça não pode ser vazio")
    break;

    case 1:
    case 2:
    case 3:
        console.log("O nome deve ter mais que 3 caracteres, digite um nome adequado")

        default:
            console.log("Nome da peça esta adequado")
            break;
}
   

console.log("O nome deve ter mais de 3 caracteres, digite um nome adequado")
}