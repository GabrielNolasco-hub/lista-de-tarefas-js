import verificarListaVazia from "./scripts/mensagemVazia.js";
import { criaItemDaLista } from "./scripts/criarItemDaLista.js";
const lista = document.getElementById('lista-de-compras');
const botaoAdicionar = document.getElementById('adicionar-item');


botaoAdicionar.addEventListener("click", (evento) => {
    evento.preventDefault();
    const itemDaLista = criaItemDaLista();
    lista.appendChild(itemDaLista);
    verificarListaVazia(lista);

})

verificarListaVazia(lista);