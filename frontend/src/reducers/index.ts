import {combineReducers} from "redux";
import dialog from "./dialogReducer";
import list from "./listReducer";
import panel from "./panelReducer";
import detail from './detailsReducer';
import person from './personReducer';

const rootReducer = combineReducers({
    dialog,
    list,
    panel,
    detail,
    person
});

export default rootReducer;