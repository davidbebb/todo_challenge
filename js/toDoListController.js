toDoList.controller('ToDoListController', [function() {
  var self = this;

  self.addToDo = function() {
    self.toDoList = {
      items:
        [
          {text: 'Test todo'},
      ],};

  };

},]);
