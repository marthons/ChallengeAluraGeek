const min = 50;
const max = 100;

const numeroAleatorio = (Math.random() * (max - min)) + min;


const numeroArredondado = numeroAleatorio.toFixed(2);

document.addEventListener("DOMContentLoaded", function() {
    // Função para atualizar o subtotal
    function updateSubtotal() {
        let totalQuantidade = 0;
        let totalPreco = 0;

        // Loop através de todos os produtos
        const produtos = document.querySelectorAll('.product');
        produtos.forEach(function(produto) {
            const quantidadeInput = produto.querySelector('input[type="number"]');
            const precoProduto = numeroArredondado;

            totalQuantidade += parseInt(quantidadeInput.value);
            totalPreco += parseInt(quantidadeInput.value) * precoProduto;
        });

        // Atualizar o subtotal na página
        const itensText = totalQuantidade > 1 ? ' itens' : ' item'
        document.getElementById('quantidade-subtotal').textContent = totalQuantidade + itensText;
        document.getElementById('valor-subtotal').textContent = totalPreco.toFixed(2);
    }

    // Adicionar evento de clique para os botões de adicionar e subtrair produtos
    const botoesAdicionar = document.querySelectorAll('button[id^="btn-adicionar-produto"]');
    const botoesSubtrair = document.querySelectorAll('button[id^="btn-subtrair-produto"]');

    botoesAdicionar.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const input = this.parentNode.querySelector('input[type="number"]');
            input.value = parseInt(input.value) + 1;
            updateSubtotal();
        });
    });

    botoesSubtrair.forEach(function(botao) {
        botao.addEventListener('click', function() {
            const input = this.parentNode.querySelector('input[type="number"]');
            if (parseInt(input.value) > 0) {
                input.value = parseInt(input.value) - 1;
                updateSubtotal();
            }
        });
    });

    // Chamar updateSubtotal() para exibir o subtotal inicial
    updateSubtotal();
});


function openConfirmation() {
    var modal = document.getElementById("myModal");
    modal.style.display = "block";
}

function closeModal() {
    var modal = document.getElementById("myModal");
    modal.style.display = "none";
}
