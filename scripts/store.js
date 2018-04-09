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

  const findAndToggleChecked = function(id){
    const checked = this.findById(id).checked;

    checked === true ? this.findById(id).checked = false : this.findById(id).checked = true;
    
    console.log(this.findById(id).checked);
  };

  const findAndUpdateName = function(id, newName){
    try{
      Item.validateName(newName);

    }catch(error){
      console.log(`cannot update name: ${error.message}`);
    }
    findById(id).name = newName;
    //shoppingList.render();
  };

  const findAndDelete = function(id){
    let index = items.findIndex(item => item.id === id);
    items.splice(index,1);
  };

  return {
    items: items,
    hideCheckedItems: hideCheckedItems,
    searchTerm: searchTerm,
    findById: findById,
    addItem: addItem,
    findAndToggleChecked,
    findAndUpdateName,
    findAndDelete
  };
}());