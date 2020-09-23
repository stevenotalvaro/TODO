import './styles.css';
import { Todo } from './classes/todo.class.js';
import {TodoList} from './classes/todo-list-class.js';
import {crearTodoHtml} from './js/componentes.js';

export const todoList = new TodoList();

const tarea = new Todo('Javascript');
todoList.nuevoTodo(tarea);

console.log(todoList);
// tarea.completado = true;

crearTodoHtml(tarea);