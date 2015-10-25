toDoList.controller('ToDoListController', [function() {
  var self = this;

  self.toDoList = [ ];
  self.toDoList.items = []; //This is an ugly way to initialise this.

  self.addToDo = function() {
    self.toDoList.items.push({text: self.toDoText, done: false});
    self.toDoText = '';
  };

  self.markDone = function(index) {
    self.toDoList.items[index].done = true;
  };

  self.editItem = function(index) {
    self.toDoText = self.toDoList.items[index].text;
    self.deleteItem(index);
  };

  self.deleteItem = function(index) {
    self.toDoList.items.splice(index, 1);
  };

  self.countItems = function() {
    return self.toDoList.items.length;
  };

  self.countItemsToDo = function() {
    var numberToDo = 0;
    for (var i = 0; i < self.toDoList.items.length; i++) {
      if (self.toDoList.items[i].done === false) {
        numberToDo += 1;
      };
    };

    return numberToDo;
  };

  self.deleteDone = function() {
    for (var i = 0; i < self.toDoList.items.length; i++) {
      if (self.toDoList.items[i].done === true) {
        self.deleteItem(i);
      };
    };
  };

},]);
