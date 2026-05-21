let cart = 0;

function addToCart() {
  cart++;
  document.getElementById("cart-count").textContent = cart;

  alert("Produto adicionado ao carrinho!");
}
