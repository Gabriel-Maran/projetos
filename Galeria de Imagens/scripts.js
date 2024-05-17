document.addEventListener('DOMContentLoaded' , function(){
    const baseImagens = {
        todas: ['imagem.jpg', '', '', '', '', '', '', '', ''],
        natureza: ['imagem.jpg', '', ''],
        cidade: ['imagem.jpg', '', ''],
        animais: ['imagem.jpg', '', '']
    }
    //Abaixo, temos um evento de click, que executara um evento de clique
    document.body.addEventListener('click', function (event) {
        //acessa a lista de classe de onde clicou e procura pela class botao-categoria
        if(event.target.classList.contains('botao-categoria')){
            
        }
    })
})
