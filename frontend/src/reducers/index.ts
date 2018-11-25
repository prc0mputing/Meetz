import {combineReducers} from "redux";
import dialog from "./dialogReducer";
import list from "./listReducer";
import panel from "./panelReducer";
import detail from './dialogReducer';

const rootReducer = combineReducers({
    dialog,
    list,
    panel,
    detail
});

export default rootReducer;