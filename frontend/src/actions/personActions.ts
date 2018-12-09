import ActionTypes from "./actionTypes";
import PersonData from '../data/person.data';

export function viewDetails(id: number) {
    return function (dispatch) {
        PersonData.get(id).then((item) => {
            dispatch({
                type: ActionTypes.Person.Details,
                selectedItem: item,
                editable: false
            });
        });
    }
}

export function getList() {
    return function (dispatch) {
        PersonData.getall().then((items) => {
            dispatch({
                type: ActionTypes.Person.List,
                selectedItem: items
            });
        });
    }
}