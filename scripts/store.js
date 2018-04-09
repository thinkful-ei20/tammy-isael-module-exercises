'use strict';
/* global shoppingList, cuid , Item*/
// eslint-disable-next-line no-unused-vars
const store = (function(){
  //const foo = 'bar';
  const items = [
    { id: cuid(), name: 'apples', checked: false },
    { id: cuid(), name: 'oranges', checked: false },
    { id: cuid(), name: 'milk', checked: true },
    { id: cuid(), name: 'bread', checked: false }
  ];
  const hideCheckedItems = false;
  const searchTerm = '';

  const findById = function(id){
    return store.items.find(item => item.id === id);
  };

  const addItem = function(name){
    try{
      Item.validateName(name);
    }catch(error){
      throw error;
    }
    this.items.push(Item.create(name));
  };

  const findAndToggleChecked= function(id){
    let checked = this.findById(id).checked;
    checked = !checked;
  };

  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);

    }catch(error){
      console.log(`cannot update name: ${error.message}`);
    }
    findById(id).name = newName;
  };

  const findaAndDelete = function(id){
    let deleteItem = items.filter(item => item.id === id);
    let index = items.findIndex(deleteItem);
    items.splice(index,1);
  };

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked,
  };
}());