var cartSection = document.getElementById('cart-section');
var toggleButtonOpen = document.getElementById('toggle-button-open');
var toggleButtonClose = document.getElementById('toggle-button-close');

toggleButtonOpen.addEventListener('click', function() {
    cartSection.classList.toggle('is-open');
});

toggleButtonClose.addEventListener('click', function() {
    cartSection.classList.remove('is-open');
});

document.addEventListener('click', e => {
  const isCartOpen = cartSection.classList.contains('is-open');
  const isClickInsideCart = cartSection.contains(e.target);
  const isClickOnOpenButton = e.target === toggleButtonOpen;
  const isClickOnAddToCartButton = e.target.closest('button')?.textContent === 'Adicionar ao carrinho';

  if (isCartOpen && !isClickInsideCart && !isClickOnOpenButton && !isClickOnAddToCartButton) {
    cartSection.classList.remove('is-open');
  }
});
