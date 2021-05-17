import { openDB, deleteDB, wrap, unwrap } from 'idb';
import Todo from '../models/todo';

const dbName = "todomin";
const storeName = "todos";

const db = openDB(dbName, 1, {
    upgrade(db) {
        db.createObjectStore(storeName)
    }
});

export async function getTodos() {
    return (await db).getAll(storeName);
}

export async function addTodo(todo: Todo) {
    (await db).put(storeName, todo, todo.id);
}

export async function completeTodo(todo: Todo) {
    todo.completed = true;
    (await db).put(storeName, todo, todo.id);
}

export async function deleteTodo() {
    // ?
}