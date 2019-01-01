import * as React from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as personActions from "../../actions/personActions";
import {
    DetailsList,
    SelectionMode
} from "office-ui-fabric-react";

/**
 * Properties
 */
interface Props {
    actions: any,
    selectedItem: Array<any>
}

/**
 * Demo List
 */
class PersonList extends React.Component<Props, any> {
    // Render the list
    render() {
        let {selectedItem} = this.props;
        if(this.props.selectedItem && this.props.selectedItem.length)
        return (
            <DetailsList items={this.props.selectedItem} />
        );
        return (
            <div>Nothing to display</div>
        );
    }
}

/**
 * Connections
 */
export default connect(
    /**
     * State to Property Mapper
     */
    (state, ownProps) => {
        return {
            selectedItem: state.person.selectedItem
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: personActions
        };
    }
)(PersonList);