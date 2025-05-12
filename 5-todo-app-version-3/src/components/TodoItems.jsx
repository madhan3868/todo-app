import { useContext } from 'react';
import { TodoItemsContext } from '../store/todoItems-store';
import TodoItem from './TodoItem';


function TodoItems () {
  // const todoItemsfromContext = useContext(TodoItemsContext);

  const {todoItems} = useContext(TodoItemsContext);
  

  // console.log(todoItemsfromContext);

  // console.log(todoItems)

  return <>
  <div className='items-container'>
    {todoItems.map((item) => (
      <TodoItem
       key={item.name}
       todoName={item.name} 
       todoDate= {item.dueDate}  />
    ))}

    </div>
  </>
}

export default TodoItems;
