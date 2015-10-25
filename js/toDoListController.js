toDoList.controller('ToDoListController', [function() {
  var self = this;

  self.toDoList = [ ];
  self.toDoList.items = [];

  self.addToDo = function() {
    self.toDoList.items.push({text: self.toDoText, done: false});
    self.toDoText = '';
  };

},]);
