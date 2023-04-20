import { TodoItem } from '../../screens/Home'
import { ADD_TODO, TOGGLE_TODO_COMPLETED, REMOVE_TODO } from '../constants';

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
