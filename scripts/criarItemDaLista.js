import { gerarDiaDaSemana } from "./geraDiaDaSemana.js";
const inputItem = document.getElementById('input-item')
let contador = 0;
export function criaItemDaLista() {
    
    if(inputItem.value === ""){
        alert('por favor insira um item');
        return
    }
    
    const itemDaLista = document.createElement("li");
    const containerItemDaLista = document.createElement("div");
    containerItemDaLista.classList.add("lista-item-container");
    const inputCheckBox = document.createElement("input");
    inputCheckBox.type = "checkbox";
    inputCheckBox.id = "checkbox-" + contador++;
    const nomeDoItem = document.createElement("p");
    nomeDoItem.innerText = inputItem.value;

    inputCheckBox.addEventListener("click", function(){
        if(inputCheckBox.checked){
            nomeDoItem.style.textDecoration = "line-through";
        }else {
            nomeDoItem.style.textDecoration = "none";
        }
    })



    containerItemDaLista.appendChild(inputCheckBox);
    containerItemDaLista.appendChild(nomeDoItem);
    itemDaLista.appendChild(containerItemDaLista);
    const dataCompleta = gerarDiaDaSemana()
    
    const itemData = document.createElement("p");
    itemData.classList.add("texto-data")
    itemData.innerText = dataCompleta
    console.log(dataCompleta);
    itemDaLista.appendChild(itemData)
    
    return itemDaLista;
    

}

