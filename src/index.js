
import './style.css';
import { Todo , TodoList } from './classes';
import { crearHtmlTodo } from './js/componentes.js';


export const todoList = new TodoList();

todoList.todos.forEach( todo =>  crearHtmlTodo( todo ) );

console.log(todoList.todos);
