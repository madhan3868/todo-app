import styles from './WelcomeMessage.module.css';
import { useContext } from 'react';
import { TodoItemsContext } from '../store/todoItems-store';

function WelcomeMessage ({}) {

  const {todoItems} = useContext(TodoItemsContext);

  return todoItems.length === 0 && <p className={styles.message}>Enjoy you'r Day</p>
}

export default WelcomeMessage;