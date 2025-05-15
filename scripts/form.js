document.addEventListener('DOMContentLoaded', function() {
  // Set current year and last modified date in footer
  document.getElementById('currentYear').textContent = new Date().getFullYear();
  document.getElementById('lastModified').textContent = document.lastModified;

  // Product array to populate the select dropdown
  const products = [
    { id: 'prod1', name: 'Ultra HD Smart TV' },
    { id: 'prod2', name: 'Wireless Noise-Cancelling Headphones' },
    { id: 'prod3', name: 'Ergonomic Office Chair' },
    { id: 'prod4', name: 'Stainless Steel Water Bottle' },
    { id: 'prod5', name: 'Bluetooth Portable Speaker' }
  ];

  // Populate product dropdown
  const productSelect = document.getElementById('productName');
  products.forEach(product => {
    const option = document.createElement('option');
    option.value = product.id;
    option.textContent = product.name;
    productSelect.appendChild(option);
  });

  // Form submission handling
  const reviewForm = document.getElementById('reviewForm');
  reviewForm.addEventListener('submit', function(e) {
    // Validate form before submission
    if (!this.checkValidity()) {
      e.preventDefault();
      // Add visual feedback for invalid fields
      const invalidFields = this.querySelectorAll(':invalid');
      invalidFields.forEach(field => {
        field.style.borderColor = '#e74c3c';
        const errorMsg = document.createElement('small');
        errorMsg.className = 'error-message';
        errorMsg.textContent = 'This field is required';
        errorMsg.style.color = '#e74c3c';
        field.parentNode.appendChild(errorMsg);
      });
    } else {
      // Store review count in localStorage
      let reviewCount = localStorage.getItem('reviewCount') || 0;
      reviewCount++;
      localStorage.setItem('reviewCount', reviewCount);
    }
  });

  // Clear error styles when fields are interacted with
  const formFields = reviewForm.querySelectorAll('input, select, textarea');
  formFields.forEach(field => {
    field.addEventListener('input', function() {
      this.style.borderColor = '';
      const errorMsg = this.parentNode.querySelector('.error-message');
      if (errorMsg) {
        errorMsg.remove();
      }
    });
  });
});