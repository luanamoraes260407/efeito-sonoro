//Declaração/criação de função tocaSomXD
function tocaSomXD (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//criando a referências contantes listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas = document.querySelectorAll('.tecla');
//criação da repetição "whilr" e trocado pelo "for"
fot (letcontadoe = 0;< listaDeTeclas.length; contador++)
    const tecla = listaDeTeclas [contador] //guarda o contador da lita 
    const efeito = teclas.classList[1];// chama 0 2° item clae individual do som 
    const idAudio = "#som_"${efeito};//utiliza a junção template tring ${}
    teclas.onclick = function(){// função anônima auxiliar para chamar tocaSom 
        tocaSom(idAudio);// chmada da função tocaSom com prâmetro idAudio
    }
   
}