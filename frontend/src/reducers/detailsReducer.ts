import ActionTypes from "../actions/actionTypes"
import initalState from "./initialState";

export default function detailsReducer(state = { selectedItem: initalState.selectedItem, editable: initalState.editable }, action) {
    switch(action.type) {
            // Handle the hide/show dialog actions
            case ActionTypes.EditDetails:
            case ActionTypes.ViewDetails:
                // Return a copy of the current state
                return Object.assign(
                    // Create a new blank object
                    {},
                    // Copy the default state
                    state,
                    // Update the "showDialog" state value
                    {selectedItem: action.selectedItem, editable: action.editable}
                );

            // Action is not handled by this reducer, return the state
            default:
                    return state;
    }
}