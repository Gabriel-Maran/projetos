document.addEventListener('DOMContentLoaded', function(){ 
    const baseImagens = {
        todas: ['animal_1.jpg', 'animal_2.jpg', 'animal_3.jpeg', 'cidade_1.jpg', 'cidade_2.jpg', 'cidade_3.jpg', 'natureza_4.jpg'],
        natureza: ['natureza_4.jpg'],
        cidade: ['cidade_1.jpg', 'cidade_2.jpg', 'cidade_3.jpg'],
        animais: ['animal_1.jpg', 'animal_2.jpg', 'animal_3.jpeg']
    }

    function carregaImagens(categoria){
        // selecionar elementos html com base em um seletor
        const galeria = document.querySelector("#galeria-imagens");
        galeria.innerHTML = '';
        const imagens = baseImagens[categoria];

        imagens.forEach(img => {
            console.log(img);
            galeria.innerHTML += '<div class = "imagem-item"> <img src="imagens/'+img+'" /> </div>'
        
        })
    }

    function ordenaImagens(ordem){
        const imagens = Array.from(document.querySelectorAll("#galeria-imagens .imagem-item"));
        imagens.sort((a, b) =>{
            console.log(a);
        })
    }

    // Evento de clique
    document.body.addEventListener('click', function (event){ 

        //acessa a lista de classe de onde clicou e procura pela classe botao-categoria
        if(event.target.classList.contains('botao-categoria')){
            const categoria = event.target.dataset.categoria;
            carregaImagens(categoria);
        }
    
        if(event.target.classList.contains('botao-ordenar')){
            const ordem = event.target.dataset.ordem;
            ordenaImagens(ordem);  
        }

    })


})
