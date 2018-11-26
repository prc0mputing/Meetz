import * as React from "react";
import {
    Dialog,
    DialogType
} from "office-ui-fabric-react";
import { connect } from "react-redux";
import * as detailsActions from "../../actions/detailsActions";

interface Props {
    actions: any,
    selectedItem: any,
    editable: boolean
}

class DetailsDialog extends React.Component<Props, any> {
    render() {
        let { selectedItem } = this.props;
        console.log(this.props);
        return (
            <Dialog
                hidden={false}
                dialogContentProps={{ type: DialogType.close}}
                title="Details Dialog">
                <h5>He is going to be written by request params</h5>
                <p>
                    The passed parameter value is <strong>{this.props.toString()}</strong> for following request.
                </p>
                {selectedItem != null && (
                    <table>
                        <thead>
                            <tr>
                                <th>ID</th>
                                <th>Name</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{selectedItem.id}</td>
                                <td>{selectedItem.name}</td>
                            </tr>
                        </tbody>
                    </table>
                )}
            </Dialog>
        );
    }
}

export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        console.log(state);
        return {
            selectedItem: state.detail.selectedItem,
            editable: state.detail.editable
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: detailsActions
        };
    }
)(DetailsDialog);