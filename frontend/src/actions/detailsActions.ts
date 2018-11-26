import ActionTypes from "./actionTypes";

export function viewDetails() {
    return function (dispatch) {
        // Load the items
        dispatch({
            type: ActionTypes.ViewDetails,
            selectedItem: { id: '2', name: 'nima' },
            editable: false
        });
    }
}

export function editDetails() {
    return function (dispatch) {
        // Load the items
        dispatch({
            type: ActionTypes.EditDetails,
            selectedItem: { id: '1', name: 'nima' },
            editable: true
        });
    }
}