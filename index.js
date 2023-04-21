'use strict';
import { menuArray } from './data.js';
const orderModal = document.getElementById('order-modal');
const orderModalInner = document.getElementById('order-modal-inner');
let itemsArray = [];
document.addEventListener('click', function (e) {
  if (e.target.dataset.buy) {
    addItem(getItemObject(e.target.dataset.buy));
    renderOrder();
  }
});

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
            <button class='add-to-cart-btn' data-buy="${item.id}">+</button>
        <br>
    </div>
        `;
  });
  return feedHtml;
}
// Create function to get the selected item object from the menuArray
function getItemObject(chosenItem) {
  // Filter the objects in array to get the object that matched the item.id
  const itemObject = menuArray.filter(function (item) {
    return item.id === chosenItem;
  })[0];
  return itemObject;
}

function addItem(itemObject) {
  //add the item to items array
  itemsArray.push(itemObject);
}

function render() {
  document.getElementById('feed').innerHTML = getFeedHtml();
}

function renderOrder() {
  let orderHtml = '';
  let totalPrice = 0;
  itemsArray.forEach(function (item) {
    orderHtml += `
    <div class="order-item-div" id="order-item-div">
        <p class="item-name" id="item-name"> ${item.name}</p>
        <p class="item-price" id="item-price"> $${item.price}</p>
      </div>
      <br />
    `;
    totalPrice += item.price;
  });
  orderHtml += `
  <div class="total-price-div" id="total-price-div">
      <p>Total price</p>
      <p class="total-price" id="total-price">$${totalPrice}</p>
    </div>
    <button class="complete-order" id="complete-order">
      Complete Order
    </button>
  `;
  orderModalInner.innerHTML = orderHtml;
}

render();
