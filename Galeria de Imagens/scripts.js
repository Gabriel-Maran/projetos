
document.addEventListener('DOMContentLoaded', function () {
    const notamedia = Number(prompt("Digite a media"));
    if(notamedia == 0){
        console.log("Aluno 100% reprovado");
    }
    else if(notamedia > 0 && notamedia < 6){
        console.log("Reprovado");
    }
    else if(notamedia>=6 && notamedia<8){
        console.log("Passou");
    }

    else if(notamedia>=8 && notamedia<9.9){
        console.log("Passou com nota boa em, muito nerd");
    }
    else if(notamedia == 10){
        console.log("Gênio");
    }
    else{
        console.log("Digita certo, animal");
    }
    
})
//object: estrutura de dados que pode armazenar multiplos valores
//NULL: quando esta vazio
//arry: objeto especial ordenado
//function
// === verifica se é igual e do mesmo tipo
// !== se é estritamente diferente