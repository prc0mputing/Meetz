import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";

export default function panelReducer(state = initalState, action) {
    switch(action.type) {
            // Handle the load items action
            case ActionTypes.LoadItems:
                // Return the items
                return action.items;

            // Action is not handled by this reducer, return the state
            default:
                    return state;
    }
}