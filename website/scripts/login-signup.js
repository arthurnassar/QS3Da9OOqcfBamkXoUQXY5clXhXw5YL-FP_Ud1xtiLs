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
           
            <p>com nossos <a href="#termosdeserviço">termos de serviço</a> e <a href="#politicadeprivacidade">política
                    de</a></p>
           
            <p><a href="#politicadeprivacidade">privacidade</a>.</p>
       
        </div>
        
        <button id="register-popup-register-button" class="popup-button">Cadastre-se</button>
    
    </section>
        `
    }
}

customElements.define('my-register-popup', MyRegisterPopup);

let loginPopupState = false;
let loginButton = document.getElementById("login-container");



// functions
// Funcao para abrir a tela de login fechar a tela de login INICIO
function openLoginContainer() {
    let loginAndRegisterPopupContainer = document.getElementById("login-register-popup-container");
    if (loginPopupState == false) {
        loginAndRegisterPopupContainer.innerHTML = "<my-login-popup><my-login-popup>"

        let loginPopup = document.getElementById("login-popup");

        setTimeout(() => { loginPopup.style.left = "0" }, 500);

        loginPopupState = true;

        let xButton = document.getElementById("login-popup-x-icon");
        xButton.addEventListener("click", closeLoginContainer);

    }

    else {

        let loginPopup = document.getElementById("login-popup");

        loginPopup.style.left = "432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 500);

        loginButton.addEventListener("click", openLoginContainer);

        loginPopupState = false;
    }

}

function closeLoginContainer() {
    let loginAndRegisterPopupContainer = document.getElementById("login-register-popup-container");


    if (loginPopupState == true) {

        let loginPopup = document.getElementById("login-popup");

        loginPopup.style.left = "432px";

        setTimeout(() => { loginAndRegisterPopupContainer.innerHTML = "" }, 1000);

        loginButton.addEventListener("click", openLoginContainer);

        loginPopupState = false;
    }
}

loginButton.addEventListener("click", openLoginContainer);
// Fim da funcao de abrir e fechar popup de login


