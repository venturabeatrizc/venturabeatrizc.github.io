function addToCart(productId) {
  const item = cart.find(item => item.product.id === productId);
  if (item) {
    item.quantity++;
  } else {
    const product = products.find(p => p.id === productId);
    if (product) {
      cart.push({ product, quantity: 1 });
    }
  }
  renderCart();
}


function renderCart() {
    let cartTable = document.querySelector('.cart-section .cart-products');
    cartTable.innerHTML = '';
    cart.forEach(({ product, quantity }) => {
        let cartDiv = document.createElement('div');
        cartDiv.className = 'cart-product';
        cartDiv.innerHTML = `       
            <img src="${product.image}" alt="${product.name}">
            <div class="cart-product-text">
                <h3>${product.name}</h3>
                <p>Qtd. ${quantity}</p>
                <p>R$${product.price.toFixed(2)}</p>
            </div>
        `;
        cartTable.appendChild(cartDiv);
    });
    updateTotal();
    updateItemCount();

}

function updateItemCount() {
    let totalItems = cart.reduce((acc, item) => acc + item.quantity, 0);
    document.getElementById('cart-count').textContent = totalItems;
}

function updateTotal() {
    let total = cart.reduce((acc, item) => acc + item.product.price * item.quantity, 0);
    document.getElementById('total').textContent = `R$${total.toFixed(2)}`;
}

document.getElementById('checkout').addEventListener('click', () => {
    if (cart.length === 0) {
        alert("Seu carrinho está vazio!");
    } else {
        alert("Pedido realizado com sucesso!");
        cart = [];
        renderCart();
    }
})

updateItemCount();