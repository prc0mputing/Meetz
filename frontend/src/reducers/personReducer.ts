import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";
import { stat } from "fs";

export default function personReducer(state = { selectedItem: null, editable: false }, action) {
    switch (action.type) {
        case ActionTypes.Person.Details:
            return Object.assign({}, state, { selectedItem: action.selectedItem, editable: action.editable });

        case ActionTypes.Person.List:
            return Object.assign({}, state, { selectedItem: action.selectedItem });

        // Action is not handled by this reducer, return the state
        default:
            return state;
    }
}