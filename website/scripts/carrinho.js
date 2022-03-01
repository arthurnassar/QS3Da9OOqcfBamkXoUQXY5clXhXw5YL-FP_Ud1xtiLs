class SelectAdressPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="select-endereco-container">
        <h2>Selecione o endereço</h2>
        <div class="select-endereco">
            <img src="./assets/main/fi_map-pinlocicon.svg" alt="meu endereco icon">
            <div class="entrega-container-popup">
                <p class="entrega-titles">Minha casa</p>
                <p id="entrega-subtitle">Rua Noel Freire, 586, Baixa Grande Arapiroca, AL - CEP 57300-030</p>
            </div>
            <input onclick="closePopupContainer()" class="radio-select-adress" type="radio" name="receiving-adress" id="adress">
        </div>
    
        <div class="select-endereco">
            <img src="./assets/main/fi_map-pinlocicon.svg" alt="meu endereco icon">
            <div class="entrega-container-popup">
                <p class="entrega-titles">Trabalho</p>
                <p id="entrega-subtitle">Rua Francisco Mendes, 344, Centro, Arapiroca, AL - CEP 57300-030</p>
            </div>
            <input onclick="closePopupContainer()" class="radio-select-adress" type="radio" name="receiving-adress" id="adress">
        </div>
    
        <div class="select-endereco">
            <img src="./assets/main/fi_map-pinlocicon.svg" alt="meu endereco icon">
            <div class="entrega-container-popup">
                <p class="entrega-titles">Casa da Fernanda</p>
                <p id="entrega-subtitle">Rua 15 de Novembro, 227, Alto do Cruzeiro, Arapiroca, AL - CEP 57300-030</p>
            </div>
            <input onclick="closePopupContainer()" class="radio-select-adress" type="radio" name="receiving-adress" id="adress">
        </div>
        <p id="add-new">adicionar novo</p>
    </div>
        `
    }
}

customElements.define('select-adress-popup', SelectAdressPopup);

let popupContainer = document.getElementById('popups-container');
let popupContainerStatus = false;

function showSelectAdress() {
    if (popupContainerStatus == false) {
        popupContainer.innerHTML = "<select-adress-popup></select-adress-popup>"
        popupContainerStatus = true;
    }
}

function closePopupContainer() {
    if (popupContainerStatus == true) {
        popupContainer.innerHTML = ""
        popupContainerStatus = false
    }
}




class InsertCupomPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        <div id="cupom-container">
        <h2>Inserir Cupom</h2>
        <form action="">
            <input type="text" name="CUPOMCODE" placeholder="Código do cupom" id="CUPOMCODE">
            <input type="submit" value="Validar cupom">
        </form>
        </div>
        `
    }
}

customElements.define('insert-cupom-popup', InsertCupomPopup);

function showInsertCupom() {
    if (popupContainerStatus == false) {
        popupContainer.innerHTML = "<insert-cupom-popup></insert-cupom-popup>"
        popupContainerStatus = true;
    }
}

function closeInsertCupom() {
    if (popupContainerStatus == true) {
        popupContainer.innerHTML = ""
        popupContainerStatus = false
    }
}



class DeleteItemPopup extends HTMLElement {
    connectedCallback() {
        this.innerHTML = `
        
        <div id="trash-item-popup">
            <img src="./assets/main/Group 9033trashbig.svg" alt="icone grande de lixo">
            <p id="trash-title">Excluir item</p>
            <p id="trash-text">deseja realmente excluir esse item do carrinho?</p>
            <div id="trash-btn-container">
                <button class="trash-btn" id="cancel-btn">Cancelar</button>
                <button class="trash-btn" id="delete-btn">Excluir</button>
            </div>

        </div>
        `
    }
}

customElements.define('delete-item-popup', DeleteItemPopup);

function showDeleteItem() {
    if (popupContainerStatus == false) {
        popupContainer.innerHTML = "<delete-item-popup></delete-item-popup>"
        popupContainerStatus = true;
    }
}

function closeDeleteItem() {
    if (popupContainerStatus == true) {
        popupContainer.innerHTML = ""
        popupContainerStatus = false
    }
}