describe('ToDo', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with a to do list', function() {
    expect(ctrl.toDoText).toBeUndefined();
  });

  xit('adds items to the do to list', function() {

  });

  xit('adds items to the do to list', function() {

  });

});
