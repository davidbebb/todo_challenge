describe('todo list', function() {

  beforeEach(function() {
    browser.get('http://localhost:8080');
    element(by.model('listCtrl.toDoText')).sendKeys('write first protractor test');
    element(by.css('[ng-click="listCtrl.addToDo()"]')).click();
  });

  it('should add a todo', function() {
    var todoList = element.all(by.repeater('item in listCtrl.toDoList.items'));
    expect(todoList.count()).toEqual(1);
  });

  it('should mark a done item as done', function() {
    var todoList = element.all(by.repeater('item in listCtrl.toDoList.items'));
    todoList.get(0).element(by.model('item.done')).click();
    var completedAmount = element.all(by.css('.toDo-true'));
    expect(completedAmount.count()).toEqual(1);
  });
});
