const calculate = document.querySelector('.calculate');
const resetBtn = document.querySelector('.reset');
const resultCard = document.querySelector('.card2');

// Hide the result card initially
resultCard.classList.add('hidden');

calculate.addEventListener('click', (e) => {
  e.preventDefault();
  document.getElementById('loader').style.display = 'flex';
  setTimeout(function() {
    document.getElementById('loader').style.display = 'none';
  }, 2000);
  
  setTimeout(() => {
    const priceAmtInput = document.getElementById('amount');
    const percentageInput = document.getElementById('discount-percentage');
    const discountAmt = document.getElementById('discount-amount');
    const finalPrice = document.getElementById('price');
    const priceAmt = parseFloat(priceAmtInput.value);
    const percentage = parseFloat(percentageInput.value);

    if ( isNaN(priceAmt) || isNaN(percentage) || priceAmt <= 1 || percentage <= 0 || percentage > 100) {
      alert('Please ensure that you enter valid positive values for both the price and discount percentage. And make sure that the percentage does not exceed 100.');
      return;
    }

    discountAmt.value = priceAmt * percentage / 100;
    finalPrice.value = priceAmt - discountAmt.value;

    // Show the result card
    resultCard.classList.remove('hidden');
  }, 2000); 
});

resetBtn.addEventListener('click', () => {
  window.location.reload();
});