const TodoList = require("../src/TodoList.js")
//let todoList = new TodoList();
describe("TodoList", () => {

  it("creates a todo item", () => {
    // set up
    const todoList = new TodoList()
    const expected = [
      {
      id: 1,
      text: "turn the heating on!",
      status: "incomplete"
    }]
    // execute
    todoList.create("turn the heating on!")
    // verify
    expect(todoList.toDoList).toEqual(expected)
  })
  it("create list of to do items", () => {
    const todoList = new TodoList()
    const expected =[
      {
        id: 1,
        text: "turn the heating on!",
        status: "incomplete"
      },
      {
        id: 2,
        text: "Write the test first!",
        status: "incomplete"
      },
      {
        id: 3,
        text: "Crack on with JS",
        status: "incomplete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Write the test first!");
    todoList.create("Crack on with JS");
    console.log('todoList :'+todoList);
    // verify
    expect(todoList.toDoList).toEqual(expected)
  })
  it("Set Complete by Id",()=>{
    const todoList = new TodoList()
    const expected = [
      {
      id: 1,
      text: "turn the heating on!",
      status: "complete"
    }]
    todoList.create("turn the heating on!")
    todoList.setComplete(1)
    expect(todoList.toDoList).toEqual(expected)
  })
  it("Set Complete by Id for non-exist object",()=>{
    const todoList = new TodoList()
    const expected ='Todo item not found'
    expect(todoList.setComplete(1)).toEqual(expected)
  })
  it("Remove a to do item by Id",()=>{
    const todoList = new TodoList()
    const expected =[
      {
        id: 2,
        text: "Write the test first!",
        status: "incomplete"
      },
      {
        id: 3,
        text: "Crack on with JS",
        status: "incomplete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Write the test first!");
    todoList.create("Crack on with JS");
    expect(todoList.removeById(1)).toEqual(expected)
  })
  it("Remove non-exist to do item by Id",()=>{
    const todoList = new TodoList()
    const expected ='Todo item not found'
    // execute
    expect(todoList.removeById(1)).toEqual(expected)
  })
  it("Get All list of to do items",()=>{
    const todoList = new TodoList()
    const expected =[
      {
        id: 1,
        text: "turn the heating on!",
        status: "complete",
      },
      {
        id: 2,
        text: "Write the test first!",
        status: "incomplete"
      }
    ]
    // execute
    todoList.create("turn the heating on!")
    todoList.create("Write the test first!");
    todoList.create("Crack on with JS");

    todoList.setComplete(1)
    todoList.removeById(3)
    // verify
    expect(todoList.toDoList).toEqual(expected)
  })
})
