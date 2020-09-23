import './styles.css';
import { Todo } from './classes/todo.class.js';
import {TodoList} from './classes/todo-list-class.js';

const todoList = new TodoList();

const tarea = new Todo('Javascript');
const tarea2 = new Todo('PHP');

todoList.nuevoTodo(tarea);
todoList.nuevoTodo(tarea2);

console.log(todoList);