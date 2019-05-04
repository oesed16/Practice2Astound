let cardsMain = document.getElementsByClassName("product-item");
let cardToClone = document.getElementsByClassName("mini-cart__product-item")[0];
let paternClones = document.getElementsByClassName('mini-cart__product-list')[0];
minicart

for (let i = 0; i < cardsMain.length; i++) {
  cardsMain[i].onclick = function(event) {
    event.preventDefault();
    if (!miniCart.querySelectorAll('[data-code' + this.dataset.code + "']").length) {
      // Original Information
      let image = this.getElementsByTagName('img')[0].outerHTML;
      let name = this.getElementsByClassName('product-item__name')[0].innerText;
      let price = this.getElementsByClassName('product-item__price')[0].innerText;
      // Clone
      let clone = cardToClone.cloneNode(true);
      paternClones.appendChild(clone);
      // Change Information to Clone
      clone.dataset.code = this.datacode;
      clone.getElementsByTagName('img')[0].outerHTML = image;
      clone.getElementsByClassName('mini-cart__product-name')[0].innerText = name;
      clone.getElementsByClassName('mini-cart__product-price')[0].innerText = price;
      updateTotal();
    }
  }
}

updateTotal() {
  // buscar clase del precio [$]
  // float 
  let total = 0;
  for (let index = 0; index < miniCart.length; index++) {
    total = total + parseFloat(miniCart[i].getElementsByClassName())
  }
  miniCartTotal.innerText = total;
}

// Agregar link remove html y agregarle una acción desde JS
// Template for product in miniCart con una var

