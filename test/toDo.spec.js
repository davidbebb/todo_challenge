describe('ToDo', function() {
  beforeEach(module('ToDoList'));

  var ctrl;

  beforeEach(inject(function($controller) {
    ctrl = $controller('ToDoListController');
  }));

  it('initialises with a blank text box', function() {
    expect(ctrl.toDoText).toBeUndefined();
  });

  it('adds items to the do to list', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    expect(ctrl.toDoList.items[0].text).toContain('Test todo');
  });

  it('stores status of tasks', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    expect(ctrl.toDoList.items[0].done).toBe(false);
  });

  it('allows a task to be deleted', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    ctrl.deleteItem(0);
    expect(ctrl.toDoList.items[0]).toBeUndefined();
  });

  it('allows an element to be edited', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    ctrl.editItem(0);
    expect(ctrl.toDoText).toEqual('Test todo');
  });

  it('allows an element to be marked done', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    ctrl.markDone(0);
    expect(ctrl.toDoList.items[0].done).toBe(true);
  });

  it('counts items in list', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    expect(ctrl.countItems()).toEqual(1);
  });

  it('counts items to do', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    ctrl.toDoText = 'Test todo 2';
    ctrl.addToDo();
    ctrl.markDone(0);
    expect(ctrl.countItemsToDo()).toEqual(1);
  });

  it('deletes items that are done', function() {
    ctrl.toDoText = 'Test todo';
    ctrl.addToDo();
    ctrl.toDoText = 'Test todo 2';
    ctrl.addToDo();
    ctrl.markDone(0);
    ctrl.deleteDone();
    expect(ctrl.countItemsToDo()).toEqual(ctrl.countItems());
  });

});
