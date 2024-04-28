document.querySelectorAll('.product-card').forEach(card => {
    const quantityInput = card.querySelector('.quantity-input');
    const decrementButton = card.querySelector('.decrement');
    const incrementButton = card.querySelector('.increment');
  
    decrementButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      if (currentValue > 1) {
        quantityInput.value = --currentValue;
      }
    });
  
    incrementButton.addEventListener('click', () => {
      let currentValue = parseInt(quantityInput.value);
      quantityInput.value = ++currentValue;
    });
  });
  