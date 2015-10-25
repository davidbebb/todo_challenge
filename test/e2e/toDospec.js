describe('angularjs homepage todo list', function() {
  it('should add a todo', function() {
    browser.get('http://localhost:8080');

    element(by.model('listCtrl.toDoText')).sendKeys('write first protractor test');
    element(by.css('[ng-click="listCtrl.addToDo()"]')).click();

    var todoList = element.all(by.repeater('item in listCtrl.toDoList.items'));
    expect(todoList.count()).toEqual(1);
    // expect(todoList.get(2).getText()).toEqual('write first protractor test');

    // You wrote your first test, cross it off the list
    todoList.get(0).element(by.css('input')).click();
    var completedAmount = element.all(by.css('.done-true'));
    expect(completedAmount.count()).toEqual(2);
  });
});
