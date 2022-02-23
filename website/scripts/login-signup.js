// LOAD LOGIN POPUP 
class MyLoginPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="login-popup" class="login-popup--hidden">

        <img id="login-popup-x-icon" src="./assets/login-signup/x-icon.svg" alt="botao de fechar">
        
        <img id="login-popup-logo" src="./assets/login-signup/logo.svg" alt="logo da empresa">
        
        <h2 id="login-popup-title">Bem Vindo!</h2>
        
        <p class="login-popup-text-present">Faça login ou cadastre-se para ter acesso</p>
       
        <p class="login-popup-text-present">a todas as funcionalidades do nosso app.</p>
       
        <button id="login-popup-login-button" class="popup-button"><a href="#">Entre</a></button>
       
        <p id="login-popup-text-or">ou</p>
        
        <button id="login-popup-register-button" class="popup-button">Cadastre-se</button>
        
        <p id="login-popup-text-socials">Ou faça login usando:</p>
        
        <div id="login-popup-social-media-icons-container">
            <img id="login-popup-facebook-icon" src="./assets/login-signup/facebook-icon.svg" alt="icone do facebook">
           
            <img id="login-popup-google-icon" src="./assets/login-signup/google-icon.svg" alt="icone do google">
           
            <img id="login-popup-apple-icon" src="./assets/login-signup/apple-icon.svg" alt="icone da apple">
        </div>

    </section>
        `
    }
}

customElements.define('my-login-popup', MyLoginPopup);

class MyRegisterPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="register-popup" class="register-popup--hidden">
       
        <img id="register-popup-x-icon" src="./assets/login-signup/x-icon.svg" alt="botao de fechar">
       
        <img id="register-popup-logo" src="./assets/login-signup/logo.svg" alt="logo da empresa">
       
        <h2 id="register-popup-title">Cadastro</h2>
        
        <p id="register-popup-inform-name">Informe seu nome</p>
        
        <input type="text" placeholder="Informe seu nome completo">
       
        <p id="register-popup-inform-phone">Informe seu telefone</p>
       
        <input type="text" placeholder="(  ) 0 0000-0000">
       
        <div id="register-popup-service-and-politcs-text">
            
            <p>Ao prosseguir com o cadastro você concorda</p>
           
            <p>com nossos <a class="register-popup-links" href="#termosdeserviço">termos de serviço</a> e <a class="register-popup-links" href="#politicadeprivacidade">política
                    de</a></p>
           
            <p><a class="register-popup-links" href="#politicadeprivacidade">privacidade</a>.</p>
       
        </div>
        
        <button onclick="window.location.replace('./cadastro.html');" id="register-popup-register-button" class="popup-button">Cadastre-se</button>
    
    </section>
        `
    }
}

customElements.define('my-register-popup', MyRegisterPopup);

class AddToCartPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <section id="add-to-cart-popup" class="add-to-cart-popup--hidden">

            <img class="add-to-cart-popup-x-icon" onclick="closeAddToCartContainer();" src="./assets/login-signup/x-icon.svg" alt="botao de fechar">
            <img class="add-to-cart-popup-x-icon" id="added-to-cart" src="./assets/main/AddProd.svg" alt="produto adicionado ao carrinho">

            <img id="add-to-cart-popup-item" src="./assets/main/item-img.svg" alt="foto do item">

            <h4 class="add-to-cart-product-title">Nome do produto</h4>
            <p class="add-to-cart-product-description">Descricao do produto</p>
            <div class="add-to-cart-product-price-container">
                <p class="add-to-cart-product-old-price">R$ 00,00</p>
                <p class="add-to-cart-product-current-price">R$ 00,00</p>
            </div>

            <p id="add-to-cart-product-details-title">Detalhes</p>

            <div id="add-to-cart-popup-service-and-politics-text-container">
              
                <p id="add-to-cart-popup-service-and-politcs-text">Gosto de cerveja de verdade mesmo com <br> 0,0% de
                    álcool.
                    Esta é a Brahma 0,0%, a melhor cerveja sem álcool do Brasil, feita com ingredientes naturais e com
                    apenas 84kcal por embalagem. Perfeita para acompanhar as refeições do dia a dia.</p>
          
                </div>

            <div id="add-to-cart-popup-quantity-big-container">

                <p id="add-to-cart-popup-service-and-politics-text-qtd">Quantidade</p>

                <div id="item-quantity-counter-container">

                    <button class="add-to-cart-popup-counter-button" onclick="quantityMinus()">-</button>

                    <p id="add-to-cart-popup-item-quantity-counter">00</p><button
                        class="add-to-cart-popup-counter-button" onclick="quantityPlus()">+</button>

                </div>
          
            </div>

            <button id="add-to-cart-popup-add-to-cart-button"
                class="popup-button" onclick="sendItemToCart()">Adicionar ao carrinho</button>

        </section>
        `
    }
}

customElements.define('add-to-cart-popup', AddToCartPopup);

let loginPopupState = false;
let registerPopupState = false;
let addToCartPopupState = false
let loginButton = document.getElementById("login-container");
let loginAndRegisterPopupContainer = document.getElementById("login-register-popup-container");
let cartItemQuantity = 0;
let cartItemQuantityText = document.getElementById("add-to-cart-popup-item-quantity-counter");



// functions
// FUNCAO PARA CARREGAR
function updateShoppingCartCounter() {
    let shoppingCartCounter = document.getElementById("shopping-cart-item-quantity-container");
    let shoppingCartShowNumber = window.localStorage.getItem("shoppingCartNumber");
    shoppingCartCounter.innerHTML = shoppingCartShowNumber;

    
} 
// FUNCAO PARA MANDAR OS ITENS PARA O CARRINHO
function sendItemToCart() { 
    let counterNumber = document.getElementById("add-to-cart-popup-item-quantity-counter");
    let shoppingCartShowNumber = counterNumber.innerHTML;
    window.localStorage.setItem("shoppingCartNumber", shoppingCartShowNumber);
    let addedToCart = document.getElementById("added-to-cart");
    addedToCart.style.width = "60%";
    setTimeout(() => {
        addedToCart.style.width = "0%";
    }, 2000);  
    setTimeout(() => {
        closeAddToCartContainer();
        updateShoppingCartCounter();
    }, 3000); 
    cartItemQuantity = 0;
}
// FUNCAO PARA AUMENTAR A QUANTIDADE DE ITENS NO CARRINHO
function quantityPlus() {
    let cartItemQuantityText = document.getElementById("add-to-cart-popup-item-quantity-counter");
    if (cartItemQuantity >= 0 && cartItemQuantity <= 8) {
        cartItemQuantity++
        cartItemQuantityText.innerHTML = "0" + cartItemQuantity;
    } else {
        cartItemQuantity++
        cartItemQuantityText.innerHTML = cartItemQuantity;
    }
}
// FUNCAO PARA DIMINUIR A QUANTIDADE DE ITENS NO CARRINHO
function quantityMinus() {
    let cartItemQuantityText = document.getElementById("add-to-cart-popup-item-quantity-counter");
    if (cartItemQuantity > 0) {
        if (cartItemQuantity > 0 && cartItemQuantity <= 10) {
            cartItemQuantity--
            cartItemQuantityText.innerHTML = "0" + cartItemQuantity;
        }
        else {
            cartItemQuantity--
            cartItemQuantityText.innerHTML = cartItemQuantity;
        }
    }
}
// ABRIR O POPUP DE ADICIONAR ITENS AO CARRINHO
function openAddToCartContainer() {
    if (addToCartPopupState == false) {
        loginAndRegisterPopupContainer.innerHTML = "<add-to-cart-popup><add-to-cart-popup>"

        let addToCartPopup = document.getElementById("add-to-cart-popup");

        setTimeout(() => { addToCartPopup.style.right = "0" }, 500);
        
        addToCartPopupState = true;
    }
}


// FUNCAO PARA FECHAR O ADD TO CART CONTAINER
function closeAddToCartContainer() {
    let loginAndRegisterPopupContainer = document.getElementById("login-register-popup-container");


    if (addToCartPopupState == true) {

        let addToCartPopup = document.getElementById("add-to-cart-popup");

        addToCartPopup.style.right = "-432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 500);
        let loginButton = document.getElementById("login-container")
        loginButton.addEventListener("click", openLoginContainer);

        addToCartPopupState = false;
    }
}


// Funcao para abrir a tela de login fechar a tela de login INICIO
function openLoginContainer() {
    if (loginPopupState == false) {
        loginAndRegisterPopupContainer.innerHTML = "<my-login-popup><my-login-popup>"

        let loginPopup = document.getElementById("login-popup");

        setTimeout(() => { loginPopup.style.right = "0" }, 500);

        loginPopupState = true;

        let xButton = document.getElementById("login-popup-x-icon");
        xButton.addEventListener("click", closeLoginContainer);

        let registerButton = document.getElementById("login-popup-register-button");
        registerButton.addEventListener("click", openRegisterContainer);
    }

    else {

        let loginPopup = document.getElementById("login-popup");

        loginPopup.style.right = "-432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 500);
        let loginButton = document.getElementById("login-container");
        loginButton.addEventListener("click", openLoginContainer);

        loginPopupState = false;
    }

}

function closeLoginContainer() {
    let loginAndRegisterPopupContainer = document.getElementById("login-register-popup-container");


    if (loginPopupState == true) {

        let loginPopup = document.getElementById("login-popup");

        loginPopup.style.right = "-432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 500);
        let loginButton = document.getElementById("login-container")
        loginButton.addEventListener("click", openLoginContainer);

        loginPopupState = false;
    }
}


// Fim da funcao de abrir e fechar popup de login


// Funcao de fechar a tela de login e abrir a tela de cadastro
function openRegisterContainer() {
    closeLoginContainer();

    setTimeout(() => {
        loginAndRegisterPopupContainer.innerHTML = "<my-register-popup><my-register-popup>"

        let registerPopup = document.getElementById("register-popup");

        setTimeout(() => { registerPopup.style.right = "0" }, 500);

        registerPopupState = true;

        let xButton = document.getElementById("register-popup-x-icon");
        xButton.addEventListener("click", closeRegisterContainer);

    }, 500);

}

function closeRegisterContainer() {

    if (registerPopupState == true) {
        let registerPopup = document.getElementById("register-popup");

        registerPopup.style.right = "-432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 500);

        loginButton.addEventListener("click", openLoginContainer);

        loginPopupState = false;
    }
}

