
document.addEventListener('DOMContentLoaded', () => {
  const productsGrid = document.querySelector('.products-grid');
  const sortAscBtn = document.getElementById('sort-price-asc');
  const sortDescBtn = document.getElementById('sort-price-desc');

  function sortProducts(direction) {
    const products = Array.from(document.querySelectorAll('.product-card'));
    const sortedProducts = products.sort((a, b) => {
      const priceA = parseInt(a.dataset.price);
      const priceB = parseInt(b.dataset.price);
      return direction === 'asc' ? priceA - priceB : priceB - priceA;
    });

    productsGrid.innerHTML = '';
    sortedProducts.forEach(product => productsGrid.appendChild(product));
  }

  sortAscBtn.addEventListener('click', () => sortProducts('asc'));
  sortDescBtn.addEventListener('click', () => sortProducts('desc'));

  // Add smooth reveal animation for products
  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.style.opacity = '1';
        entry.target.style.transform = 'translateY(0)';
      }
    });
  });

  document.querySelectorAll('.product-card').forEach(card => {
    card.style.opacity = '0';
    card.style.transform = 'translateY(20px)';
    card.style.transition = 'all 0.6s ease';
    observer.observe(card);
  });
});
