
document.addEventListener('DOMContentLoaded', () => {
    // Variaveis globais
    // Status da loja
    let storeStatus = document.getElementById('store-status');

    // essa variavel definira se a loja esta aberta ou nao
    let isStoreOnpen = true;


    // Function
    // Função para verificar o status da loja
    function storeStatusChanger() {
        if (isStoreOnpen == true) {
            storeStatus.className = 'store-status--open';
            storeStatus.innerHTML = 'loja aberta';
        }

        else {
            storeStatus.className = 'store-status--closed';
            storeStatus.innerHTML = 'loja fechada';
        }
    }
    storeStatusChanger();

    //Function
// TODO criar essa variavel quando fizer o botao add item e remove item
// Função quando adicionar item (deve fazer essa variavel aumentar)
// Função quando remover item (deve fazer essa variavel diminuir)
let cartItemQuantity = 0

// Função que atualiza o numero de items no carrinho
function itemCounterTrack() {
    let cartItemCounter = document.querySelector('#shopping-cart-item-quantity-counter');
    cartItemCounter.innerHTML = cartItemQuantity;
}

// Executar essa funcao sempre que apertar o botao de adicionar ou remover itens
itemCounterTrack()

});




class MyHeader extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <header>
        <nav>
            <section id="logo-nav">
                <img src="./assets/navbar/logo-eita.svg" alt="logo da empresa">
            </section>
            <section id="search-bar-nav">
                <img id="search-btn" src="./assets/navbar/search-bar-icon.svg" alt="botao de pesquisar">
                <input type="text" name="barra de pesquisa" placeholder="buscar">
            </section>
            <section id="icons-nav">
                <!-- todo put script that changes store status to open or closed -->
                <p id="store-status" class="store-status--closed"></p>
                <div id="login-container">
                    <img src="./assets/navbar/user-icon.svg" alt="icone do usuario">
                    <p>entrar</p>
                </div>
                <div id="cart-icon">
                    <div id="shopping-cart-icon-container">
                        <!-- Este container deve ter seu innerHTML mudado via JS sempre que um item for adicionado ao carrinho -->
                        <div id="shopping-cart-item-quantity-container">

                            <p id="shopping-cart-item-quantity-counter">0</p>
                        </div>
                        <img src="./assets/navbar/shoppingcart-icon.svg" alt="icone do carrinho de compras">
                    </div>
                    <p>carrinho</p>
                </div>
            </section>
        </nav>
        <div id="nav-underline"></div>
    </header>
        `
    }
}

customElements.define('my-header', MyHeader);

