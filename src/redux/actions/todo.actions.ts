import { TodoItem } from '../../screens/Home'

export const ADD_TODO = 'ADD_TODO';
export const TOGGLE_TODO_COMPLETED = 'TOGGLE_TODO_COMPLETED';
export const REMOVE_TODO = 'REMOVE_TODO';

interface AddTodoAction {
    type: typeof ADD_TODO;
    payload: TodoItem;
}

interface ToggleTodoCompletedAction {
    type: typeof TOGGLE_TODO_COMPLETED;
    payload: TodoItem;
}

interface RemoveTodoAction {
    type: typeof REMOVE_TODO;
    payload: TodoItem;
}

export type TodoActionTypes = AddTodoAction | ToggleTodoCompletedAction | RemoveTodoAction;

export function addTodo(todo: TodoItem): TodoActionTypes {
    return {
        type: ADD_TODO,
        payload: todo,
    };
}

export function toggleTodoCompleted(todo: TodoItem): TodoActionTypes {
    return {
        type: TOGGLE_TODO_COMPLETED,
        payload: todo,
    };
}

export function removeTodo(todo: TodoItem): TodoActionTypes {
    return {
        type: REMOVE_TODO,
        payload: todo,
    };
}
