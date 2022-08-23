import { combineReducers } from "redux";
import filtersReducer from "../redux/filters/filtersReducer";
import todosReducer from "../redux/todos/todosReducer";


const rootReducer = combineReducers({
    todos: todosReducer,
    filters: filtersReducer
})

export default rootReducer;