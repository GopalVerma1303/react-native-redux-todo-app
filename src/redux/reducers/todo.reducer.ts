import { TodoItem } from '../../screens/Home'
import { ADD_TODO, REMOVE_TODO, TOGGLE_TODO_COMPLETED, TodoActionTypes } from '../actions/todo.actions'

const initialState: TodoItem[] = []

export default function todoReducer(state = initialState, action: TodoActionTypes): TodoItem[] {
    switch (action.type) {
        case ADD_TODO:
            return [...state, action.payload];
        case TOGGLE_TODO_COMPLETED:
            return state.map(todo =>
                todo.id === action.payload.id ? { ...todo, completed: !todo.completed } : todo
            );
        case REMOVE_TODO:
            return state.filter(todo => todo.id !== action.payload.id);
        default:
            return state;
    }
}
