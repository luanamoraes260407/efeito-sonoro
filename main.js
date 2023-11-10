//Declaração/criação de função tocaSomXD
function tocaSomXD (idElementoAudio) {
    document.querySelector(idElementoAudio).play();
}
//criando a referências contantes listaDeTeclas e buscando a classe coletiva.tecla
const listaDeTeclas = document.querySelectorAll('.tecla');

fot (letcontadoe = 0;< listaDeTeclas.length; contador++)
    const tecla = listaDeTeclas [contador]
    const efeito = teclas.classList[1];
    const idAudio = "#som_"${efeito};
    teclas.onclick = function(){
        tocaSom(idAudio);
    }
   
}