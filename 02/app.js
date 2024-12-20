document.addEventListener('DOMContentLoaded', () => {
  const inputList = document.getElementsByClassName('cart__quantity');
  const summaryPrice = document.querySelector('.cart__btn-calculate');
  const totalPrice = document.querySelector('.cart__total-price');

  summaryPrice.addEventListener('click', () => {
    let price = 0;
    [...inputList].forEach((item) => {
      const { dataset, value } = item;
      price += value * dataset.price;
    });
    totalPrice.textContent = price;
  });
});