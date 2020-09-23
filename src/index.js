import './styles.css';
import { Todo } from './classes/todo.class.js';
import {TodoList} from './classes/todo-list-class.js';
import {crearTodoHtml} from './js/componentes.js';

export const todoList = new TodoList();

todoList.todos.forEach(crearTodoHtml);

console.log('todos', todoList.todos)