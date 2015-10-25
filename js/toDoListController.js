toDoList.controller('ToDoListController', [function() {
  var self = this;

  self.toDoList = [ ];
  self.toDoList.items = []; //This is an ugly way to initialise this.

  self.addToDo = function() {
    self.toDoList.items.push({text: self.toDoText, done: false});
    self.toDoText = '';
  };

  self.markDone = function() {
    e;
  };

},]);
