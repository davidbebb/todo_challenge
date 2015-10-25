describe('ToDo', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with a to do list', function() {
    expect(ctrl.toDoText).toBeUndefined();
  });

  it('adds items to the do to list', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    expect(ctrl.toDoList.items[0].text).toContain('Test todo');
  });

  xit('adds items to the do to list', function() {

  });

});
