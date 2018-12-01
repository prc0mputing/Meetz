import ActionTypes from "./actionTypes";

export function viewDetails(id) {
    return function (dispatch) {
        // Load the items
        dispatch({
            type: ActionTypes.ViewDetails,
            selectedItem: { id: id, name: 'nima' },
            editable: false
        });
    }
}

export function editDetails(id) {
    return function (dispatch) {
        // Load the items
        dispatch({
            type: ActionTypes.EditDetails,
            selectedItem: { id: id, name: 'nima' },
            editable: true
        });
    }
}