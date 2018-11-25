import ActionTypes from "./actionTypes";

export function viewDetails() {
    return {
        type: ActionTypes.ViewDetails,
        selectedItem: { id: '1', name: 'nima' },
        editable: false
    };
}

export function editDetails() {
    return {
        type: ActionTypes.EditDetails,
        selectedItem: { id: '1', name: 'nima' },
        editable: true
    };
}