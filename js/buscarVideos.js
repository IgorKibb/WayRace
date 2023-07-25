import { conectaAPI } from "./conectaAPI.js";
import constroiCard from "./mostrarVideos.js"; //para importar diretamente uma função.

async function buscarVideos(evento){
   evento.preventDefault();

   const dadosDePesquisa = document.querySelector("[data-pesquisa]").value;
   const busca = await conectaAPI.buscaVideos(dadosDePesquisa); //importei a função buscaVideos sendo uma propriedade co conectaAPI, já que ele é uma das funções declaradas na array conectaAPI.

   const lista = document.querySelector("[data-lista]");

   //laço de repetição. um looping para apagar sempre o primeiro filho, assim infinitamente, até apagar tudo.
   while (lista.firstChild){
      lista.removeChild(lista.firstChild);
   }
   
   //vai criar um filho que vai ser anexado dentro da lista. REVER appendChild.
   busca.forEach(elemento => lista.appendChild(
      constroiCard(elemento.titulo, elemento.descricao, elemento.url, elemento.iamgem))); //criou um card para cada filho.

      if(busca.length == 0){
         lista.innerHTML = `<h2 class="mensagem__titulo">Não existem vídeos com esse termo!</h2>`
      }
}

const botaoDePesquisa = document.querySelector("[data-botao-pesquisa]");

botaoDePesquisa.addEventListener("click", evento => buscarVideos(evento))