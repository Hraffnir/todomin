import { reactive } from "@vue/reactivity";
import Todo from "./models/todo";

export const state =  reactive({
    todos: [] as Todo[]
});