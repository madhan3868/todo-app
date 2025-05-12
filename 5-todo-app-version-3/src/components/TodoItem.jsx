import { useContext } from 'react';
import styles from '../App.module.css';
import { MdDelete } from "react-icons/md";
import { TodoItemsContext } from '../store/todoItems-store';

function TodoItem ({todoName, todoDate, onDeleteClick }) {
  // let todoName = 'Buy Milk';
  // let todoDate = '06/03/2025'

  const {deleteItem} = useContext(TodoItemsContext);

  return <div className={`container ${styles.todoContainer} `}>
    <div className="row">
      <div className="col-6">
        {todoName}
      </div>
      <div className="col-4">
        {todoDate}
      </div>
      <div className="col-2">
        <button type="button" className={`btn btn-danger ${styles.addButton}`} onClick={() => deleteItem(todoName)}>
        <MdDelete />
        </button>
      </div>
    </div>
  </div>
}

export default TodoItem