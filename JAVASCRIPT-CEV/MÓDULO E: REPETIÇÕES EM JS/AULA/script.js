/*MÓDULO E: ESTRUTURAS DE REPETIÇÃO*/
//1.ESTRUTURA DE REPETIÇÃO COM TESTE NO INÍCIO = while //"while é a mais usada"
//2.ESTRUTURA DE REPETIÇÃO COM TESTE NO FINAL = do while
//3.ESTRUTURA DE REPETIÇÃO COM CONTROLE = for
//4.EXERCÍCIOS PROPOSTOS
//····································································································
//SEQUÊNCIAS
//CONDIÇÕES
//REPETIÇÕES
//····································································································
//1.REPETIÇÕES COM TESTE NO INÍCIO = while
//····································································································

/*
//
while(condição){
    //bloco
}
*/

/*
//EX1: FUNÇÃO COMER PIZZA
//ESTRUTURA MENOS EFICIENTE

function comerPizza(){
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
    comerFatia()
}
*/

/*
//EX2: FUNÇÃO COMER PIZZA
//ESTRUTURA MAIS EFICIENTE
//while = enquanto

function comerPizza(){
    while(temFatia()){
        comerFatia()
    }
}
*/  

/*
//TESTE NO NODE:
console.log("Tudo bem?");
console.log("Tudo bem?");
console.log("Tudo bem?");
console.log("Tudo bem?");
console.log("Tudo bem?");
console.log("Tudo bem?");
*/

/*
//EX1:
var contador = 1; 
while(contador <= 3){ 
    console.log("Tudo bem?"); 
    contador++ //contador = contador +1; 
}
//"contador começa com 1"
//"enquanto contador for menor que..."
//"imprime tudo bem"
//c++
*/

/*
//EX2:
var contador = 1; 
while(contador <= 3){ 
    console.log(`Passo ${contador}`); 
    contador++ //contador = contador +1; 
}
*/
//····································································································
//2.REPETIÇÕES COM TESTE NO FINAL = do while
//····································································································

/*
//
do{
    //bloco
} while(condição)   
*/

/*
//
var contador = 1
do {
    console.log(`Passo ${contador}`);
    contador++;
} while(contador <= 5)
*/

//····································································································
//3.REPETIÇÕES COM CONTROLE =
//····································································································

/*
//
for(inicio; teste; incremento){
    //bloco
}
*/

/*
//EX USANDO WHILE:
var c = 1; //inicialização
while(c <= 5){ //teste lógico
    console.log(`Passo ${c}`); 
    c++; //incremento
}
*/

/*
//EX USANDO DO WHILE:
var c = 1; //inicialização
do {
    console.log(`Passo ${c}`); 
    c++; //incremento
} while(c <= 5); //teste lógico
*/

/*
//EX USANDO FOR:
for(var c = 1; c <= 5; c++){ //inicialização, teste lógico, incremento
    console.log(`Passo ${c}`);
}
*/

//····································································································
//MODO DE DEPURAÇÃO (DEBUG):
//····································································································
/**/
//
console.log("Vai começar...");

for(var c = 1; c <= 5; c++){
    console.log(c)
}

console.log("Fim!")
