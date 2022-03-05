
document.addEventListener('DOMContentLoaded', () => {
    // Variaveis globais
    // Status da loja
    clientLoggedVerify();
    let storeStatus = document.getElementById('store-status');

    // essa variavel definira se a loja esta aberta ou nao
    let isStoreOnpen = true;
    // Essa variavel diz se o usuario esta logado
    let isUserLoggedIn = false;


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

function clientLoggedVerify() {
    if (clientLogged == false) {


        class MyHeader extends HTMLElement {
            connectedCallback() {
                this.innerHTML = `
                <header id="mobile-header">
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
                <div id="nav-underline"><p id="mobile-text"><img src="./assets/main/fi_map-pin.jpg" style="height: 12px; width: 12px; background-color: white;" alt="">Rua Noel Freire , 432, Baixa Grande</p></div>
                </header>
        `
            }


        }

        customElements.define('my-header', MyHeader);
        let loginButton = document.getElementById("login-container");
        setTimeout(() => { loginButton.addEventListener("click", openLoginContainer) }, 100);
        setTimeout(() => {
            let shoppingCartCounter = 0;
            let shoppingCartShowNumber = document.getElementById("shopping-cart-item-quantity-container");
            shoppingCartShowNumber.innerHTML = shoppingCartCounter;
        }, 100);

    } else {
        class MyHeader extends HTMLElement {
            connectedCallback() {
                this.innerHTML = `
                <header>

                <nav>
        
                    <section id="logo-nav">
         
                        <img src="./assets/navbar/logo-eita.svg" alt="logo da empresa">
         
                    </section>
         
                    <section id="search-bar-nav-logged-in">
         
                        <img id="search-btn" src="./assets/navbar/search-bar-icon.svg" alt="botao de pesquisar">
         
                        <input type="text" name="barra de pesquisa" placeholder="buscar">

                        <img id="search-x-btn" src="./assets/fi_x-circle.svg" alt="botao x"
         
                    </section>
         
                    <section id="icons-nav">
         
                        <!-- todo put script that changes store status to open or closed -->
                        <p id="store-status" class="store-status--closed"></p>
         
                        <div id="perfil-container">
         
                            <img src="./assets/navbar/user-icon.svg" alt="icone do usuario">
         
                            <p>perfil</p>
         
                        </div>
        
                        <div id="favorites-container">
         
                            <img src="./assets/navbar/favorites-icon.svg" alt="icone de favoritos">
         
                            <p>favoritos</p>
         
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
        
                <div id="nav-underline-logged-in"><p id="nav-underline-nome-usuario">Olá,</p><p id="nav-underline-logout">Sair</p></div>
        
            </header>
            `
            }
        }

        customElements.define('my-header', MyHeader);
        document.getElementById("nav-underline-nome-usuario").innerHTML = "Olá, " + usuario[0].nome;
        document.getElementById("nav-underline-logout").addEventListener("click", () => {
            clientLogged = false;
            document.location.reload(true);
            // Quando estiver utilizando um database vai funcionar
               
            
        })

    }
}