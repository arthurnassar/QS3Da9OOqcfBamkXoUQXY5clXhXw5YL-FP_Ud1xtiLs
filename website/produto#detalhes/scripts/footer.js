class MyFooter extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <footer>
        <img src="./assets/footer/logo.svg" alt="logo da empresa">
       
        <section id="footer-sections-container">
          
            <section id="footer-adress-media-section">
               
                <h3 id="footer-address-media-section-adress-title" class="textsize20">Endereço</h3>
                
                <div id="footer-adress-media-section-adress-container">
                   

                    <p class="textsize14">Avenida Miguel Correia de Amorim,</p>

                    <p class="textsize14">1240 - Baixão, Arapiraca - AL, Cep:</p>

                    <p class="textsize14">57.305-495</p>

                    <p class="textsize14">CNPJ: 15.353.706/0001-04</p>

                </div>

                <h3 id="footer-adress-media-section-media-title" class="textsize20">Social Media</h3>

                <p id="footer-adress-media-section-social-text">Siga-nos nas redes sociais</p>

                <div id="footer-adress-media-section-media-icons">

                    <img src="./assets/footer/instagram-icon.svg" alt="icone do instagram">

                    <img src="./assets/footer/facebook-icon.svg" alt="icone do facebook">

                    <img src="./assets/footer/twitter-icon.svg" alt="icone do twitter">

                </div>

            </section>

            <section id="footer-payment-methods-section">

                <h3 class="textsize20">Formas de Pagamento</h3>

                <img src="./assets/footer/payment-methods.svg" alt="formas de pagamento - hipercard, visa, elo, mastercard, american express, banese, ticket, sodexo, alelo">
 
            </section>
 
            <section id="footer-contact-section">
 
                <h3 id="footer-contact-section-title" class="textsize20">Contatos</h3>
 
                <p class="textsize14">Vendas</p>
 
                <p class="footer-contact-section-whatsapp-contacts textsize14">(82) 99119-6991</p>
 
                <p class="textsize14">Atendimento</p>
 
                <p class="footer-contact-section-whatsapp-contacts textsize14">(82) 99119-6991</p>
 
                <p id="footer-contact-section-emails" class="textsize14">contato@cliente.com.br</p>
 
                <p class="textsize14">atendimento@cliente.com.br</p>
 
            </section>
 
            <section id="footer-our-app-section">
 
                <h3 id="footer-our-app-section-title" class="textsize20">Instale nosso app</h3>
 
                <img src="./assets/footer/play-store-icon.svg" alt="icone da playstore">
 
                <img src="./assets/footer/app-store-icon.svg" alt="icone da appstore">
 
            </section>
 
        </section>
        
        
    </footer>
    <div id="footer-strong-line">Desenvolvido por 3A Solution - Direitos reservados</div>
        `
    }
}

customElements.define('my-footer', MyFooter);
