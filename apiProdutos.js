import { arrayProdutos } from "./produtos.js";

const container = document.getElementById("produto");

for (let i = 0; i < arrayProdutos.length; i++) {
    let divElement = document.createElement("div");
    divElement.classList.add("product");

    divElement.innerHTML = `

            <img src="${arrayProdutos[i].img}" class="img__produto">
            <h2 class="text__produto">${arrayProdutos[i].produto}</h2>
            <p class="text__descrition">${arrayProdutos[i].description}</p>
            <p class="text__preco" id="preco">Preço: ${arrayProdutos[i].preco}</p>
            <button id="btn-subtrair-produto-06">-</button>
            <input class="input__quantidade" id="quantidade-produto-06" type="number" value="0" min="0">
            <button id="btn-adicionar-produto-06">+</button>
            
            `;

    divElement.id = `post-${i + 1}`

    let main = document.querySelector("main");
    container.appendChild(divElement);

}
