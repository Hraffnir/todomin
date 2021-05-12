import { reactive } from "@vue/reactivity";

interface ITodoItem {
    text: string;
    checked: boolean;
}

export const state =  reactive({
    todos: [] as ITodoItem[]
});