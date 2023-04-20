'use strict';
import { menuArray } from './data.js';
const addToCardBtn = document.getElementById('add-to-cart-btn');
function getFeedHtml() {
  let feedHtml = '';
  menuArray.forEach(function (item) {
    feedHtml += `
    <div class="item">
        <div class="item-img">
            ${item.emoji}
        </div>
        <div class="item-content">
            <p class='product-name'>${item.name}</p>
            <p class='product-description'>${item.ingredients}</p>
            <p class='price'>$${item.price}</p>
        </div>
            <button class='add-to-cart-btn' id='add-to-cart-btn' data-buy="${item.id}">+</button>
        <br>
    </div>
        `;
  });
  return feedHtml;
}

function render() {
  document.getElementById('feed').innerHTML = getFeedHtml();
}
render();

// when add to cart btn is pressed, the order modal appears with the item you selected and a subtotal
addToCardBtn.addEventListener('click', function (itemId) {
  const targetItemObject = menuArray.filter(function (item) {
    return (item.id = itemId);
  })[0];
  //push each item to a new array. If the iem exists, as the price to the existing total.
});
