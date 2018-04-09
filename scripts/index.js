/* global shoppingList, cuid, store, Item */
'use strict';
// eslint-disable-next-line no-unused-vars

$(document).ready(function() {
  //console.log(store);
  //console.log(foo);
  const itemNames = [ '', 'apples', 'pears' ];
  itemNames.forEach(name => {
    try {
      Item.validateName(name);
      store.items.push(Item.create(name));
    } catch(error) {
      console.log('Cannot add item: ' + error.message);
    }
  });
  console.log(itemNames);
  shoppingList.render();

  shoppingList.bindEventListeners();
  shoppingList.render();
  console.log(Item);
  console.log(foo);
});
