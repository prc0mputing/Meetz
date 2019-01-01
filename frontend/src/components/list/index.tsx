import * as React from "react";
import {bindActionCreators} from 'redux';
import {connect} from "react-redux";
import * as listActions from "../../actions/listActions";
import {
    DetailsList,
    SelectionMode
} from "office-ui-fabric-react";

/**
 * Properties
 */
interface Props {
    actions: any,
    items: Array<any>
}

/**
 * Demo List
 */
class DemoList extends React.Component<Props, any> {
    // Render the list
    render() {
        let {items} = this.props;
        console.log(this.props.items);
        if(this.props.items && this.props.items.length)
        return (
            <DetailsList items={this.props.items} />
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
            items: state.list.items
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: listActions
        };
    }
)(DemoList);