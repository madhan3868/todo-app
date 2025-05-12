import styles from '../App.module.css';
import { useState, useRef, useContext } from 'react';
import { MdOutlineDownloadDone } from "react-icons/md";
import { TodoItemsContext } from '../store/todoItems-store';

function AddTodo() {

  // const [todoName, setTodoName] = useState('');
  // const [dueDate, setDueDate]= useState('');

  const {addNewItem} = useContext(TodoItemsContext);

  const todoNameElement = useRef();
  const dueDateElement = useRef();

  // const handleNameChange = (event) => {
  //   setTodoName(event.target.value)

  // }

  // const handleDateChange = (event) => {
  //   setDueDate(event.target.value);
  //   console.log(`no of updates are : ${noOfUpdates.current}`);
  // }

  const handleAddButtonClicked = () => {
    const todoName = todoNameElement.current.value;
    const dueDate = dueDateElement.current.value;
    console.log(todoName, dueDate);
    todoNameElement.current.value= ''
    dueDateElement.current.value= '';
    addNewItem(todoName, dueDate);
    // setDueDate('');
    // setTodoName('');
  }

  return <div className={`container ${styles.todoContainer} `}>
    <div className="row">
      <div className="col-6">
        <input className={`${styles.information}`} 
        ref={todoNameElement}
        type="text" 
        placeholder="Enter Todo Here" />
      </div>
      {/* value={todoName} 
      onChange={handleNameChange} */}
      <div className="col-4">
        <input className={`${styles.information}`} 
        ref={dueDateElement}
        type="date"  />
      </div>
      {/* value={dueDate}
       onChange={handleDateChange} */}
      
      <div className="col-2">
        <button type="button" 
        className={`btn btn-success ${styles.addButton}`} onClick={handleAddButtonClicked}>
          <MdOutlineDownloadDone />
        </button>
      </div>
    </div>
  </div>
}

export default AddTodo;