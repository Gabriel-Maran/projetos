document.addEventListener('DOMContentLoaded' , function(){
    const baseImagens = {
        todas: ['animal_1.jpg', 'animal_2.jpg', 'animal_3.jpeg', 'cidade_1.jpg', 'cidade_2.jpg', 'cidade_3.jpg', 'natureza_4.jpg'],
        natureza: ['natureza_4.jpg'],
        cidade: ['cidade_1.jpg', 'cidade_2.jpg', 'cidade_3.jpg'],
        animais: ['animal_1.jpg', 'animal_2.jpg', 'animal_3.jpeg']
    }
    //Abaixo, temos um evento de click, que executara um evento de clique

    function carregaImagens(){
        //selecionar elementos html, com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");
        const imagens = baseImagens['todas'];
        imagens.forEach(img => { 
            galeria.innerHTML += '<div> <img src="Imagens/'+img+'" /> </div>';
         });


    }
    document.body.addEventListener('click', function (event) {
        //acessa a lista de classe de onde clicou e procura pela class botao-categoria
        if(event.target.classList.contains('botao-categoria')){
            carregaImagens();
        }
    })
})
