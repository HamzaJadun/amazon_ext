# amazon_ext
Created this Chrome extension, which automatically highlights Amazon products with less than 50 reviews on the SERP... It will save you alot of time...

# PPC Products + CODE EXP
This code is written in JavaScript and it highlights products on an Amazon search results page with less than 50 reviews and not part of a sponsored ad or PPC campaign.

The code defines a function called highlightProducts() that gets all the product items on the page using the querySelectorAll() method and loops through each product item. For each product item, it extracts the review count from the review element using the querySelector() method and regular expression to extract the integer value from the text. If the review count is less than 50 and the product item is not sponsored, the function adds a class called highlighted to the product item and adds a new image element to the product item using createElement() method.

The function also adds a class called highlighted1 to the product item if it has a best-seller badge. The number of highlighted products is counted using the querySelectorAll() method and displayed above the product list. A button element is created and inserted after the count div. Clicking on the button scrolls to the first highlighted product.

The code also checks if the current page is a search results page and calls the highlightProducts() function. It listens for URL changes and removes the highlight classes from product items. If the URL includes a search results page, it calls the highlightProducts() function again.

# Any Question ???
https://web.facebook.com/hamxa.jadun/

