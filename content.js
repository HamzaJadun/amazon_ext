// Function to highlight products with less than 50 reviews and not part of a sponsored ad or PPC campaign
function highlightProducts() {
  // Get all the product items on the page
  const productItems = document.querySelectorAll('[data-component-type="s-search-result"]');

  // Loop through each product item and extract the review count
  productItems.forEach((productItem) => {
    const reviewElement = productItem.querySelector('.a-size-base.s-underline-text');
    const bestSeller = productItem.querySelector('.a-badge-text');
    const sponsored = productItem.querySelector('.puis-label-popover');
  
    if (reviewElement) {
      const reviewText = reviewElement.innerText.trim();
      const reviewCount = parseInt(reviewText.replace(/[^0-9]/g, ''));
  
      if (reviewCount < 50 && !sponsored) {
        productItem.classList.add('highlighted');
        const imageDiv = document.createElement('div');
        imageDiv.classList.add('highlighted-image');
        imageDiv.innerHTML = '<img src="https://i.ibb.co/k4hcZbw/h321.png" alt="hehehe">';
        productItem.appendChild(imageDiv);
      }
    }

    if (bestSeller) {
      productItem.classList.add('highlighted1');
    }
  });

  const highlightedCount = document.querySelectorAll('.highlighted').length;
  const countDiv = document.createElement('div');
  countDiv.classList.add('highlighted-count');
  countDiv.innerText = `${highlightedCount} Product(s) Found in this list!!! :)`;

  // Insert the count div before the product list
  const productList = document.querySelector('[data-component-type="s-search-results"]');
  productList.parentNode.insertBefore(countDiv, productList);

  // Create button element
  const button = document.createElement('button');
  button.style="margin-bottom: 3px";
  button.innerText = 'Jump to Product';

  // Insert the button after the count div
  countDiv.parentNode.insertBefore(button, countDiv.nextSibling);

  // Scroll to the first highlighted product on button click
  button.addEventListener('click', () => {
    const firstHighlightedProduct = document.querySelector('.highlighted');
    if (firstHighlightedProduct) {
      firstHighlightedProduct.scrollIntoView({ behavior: 'smooth' });
    }
  });
}

// Check if the current page is a search results page and highlight products
if (window.location.href.includes('www.amazon.com/s')) {
  highlightProducts();
}

// Listen for URL changes and remove highlight classes from product items
window.addEventListener('popstate', () => {
  const highlightedItems = document.querySelectorAll('.highlighted, .highlighted1');
  highlightedItems.forEach((highlightedItem) => {
    highlightedItem.classList.remove('highlighted', 'highlighted1');
  });

  if (window.location.href.includes('www.amazon.com/s')) {
    highlightProducts();
  }
});
