import { combineReducers } from "redux";
import themeReducer from './theme.reducer'
import todoReducer from './todo.reducer'

const rootReducer = combineReducers({
    theme: themeReducer,
    todo: todoReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;