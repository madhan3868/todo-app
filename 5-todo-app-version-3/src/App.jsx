import AppName from './components/AppName'
import AddTodo from './components/AddTodo'
import TodoItems from './components/TodoItems'
import { useState,  useReducer } from 'react'
import WelcomeMessage from './components/WelcomeMessage'
import { TodoItemsContext } from './store/todoItems-store'

function todoItemsReducer (currentTodoList, action) {

  let newTodoItems = currentTodoList;

  if (action.type === 'NEW_Item') {

    newTodoItems = [
    ...currentTodoList, 
    {name: action.payload.itemName, dueDate: action.payload.itemDueDate}];

  } else if (action.type === 'DELETE_Item') {

    newTodoItems = currentTodoList.filter(item => item.name !== action.payload.itemName);
  }
  return newTodoItems;
}

function App() {

  //const [todoList, setTodoItems] = useState([]);

  const [todoList, dispatchTodoItems] = useReducer(todoItemsReducer, []);

  const addNewItem = (itemName, itemDueDate) => {
    // const newTodoItems = [
    // ...todoList, 
    // {name: itemName, dueDate: itemDueDate}];
    // setTodoItems(newTodoItems)

    // setTodoItems((currValue) => {
    //   const newTodoItems = [
    //     ...currValue, 
    //     {name: itemName, dueDate: itemDueDate}
    //   ];
    //     return newTodoItems;
    // });

    // This Method gives us the updated values of the object 
    // setTodoItems((currValue) => [
    //     ...currValue, 
    //     {name: itemName, dueDate: itemDueDate}
    //   ]);

    const newItemAction = {
      type: 'NEW_Item',
      payload: {
        itemName,
        itemDueDate
      }
    };

    dispatchTodoItems(newItemAction)

  };

  const deleteItem = (todoItemName) => {
    // const newTodoItems = todoList.filter(item => item.name !== todoItemName);
    // setTodoItems(newTodoItems);
    // console.log(`Item Deleted: ${todoItemName}`)

    const deleteItemAction = {
      type: 'DELETE_Item',
      payload: {
        itemName : todoItemName,
      }
    };

    dispatchTodoItems(deleteItemAction)
  }

  // const TodoList = [{name: 'Buy milk', dueDate: '09/03/2025'}];

  return (
    <TodoItemsContext.Provider value={{
      todoItems: todoList,
      addNewItem: addNewItem,
      deleteItem: deleteItem
    }}>

   <center className='todo-container'>
      <AppName/>
      <AddTodo  />
      <WelcomeMessage />
      <TodoItems />
    </center>
    </TodoItemsContext.Provider>
  );
   
}

export default App
