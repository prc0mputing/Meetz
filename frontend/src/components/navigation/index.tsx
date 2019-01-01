import * as React from "react";
import {
    CommandBar, Nav
} from "office-ui-fabric-react";
import { bindActionCreators } from 'redux';
import { connect } from "react-redux";
import { withRouter } from 'react-router-dom';

import ActionTypes from "../../actions/actionTypes";
import DemoDialog from "../dialog";
import DemoPanel from "../panel";
import * as panelActions from "../../actions/panelActions";
import * as dialogActions from "../../actions/dialogActions";

/**
 * Properties
 */
interface Props {
    actions: any,
    showDialog: boolean,
    showPanel: boolean
}

/**
 * Navigation
 */
class Navigation extends React.Component<Props, any> {

    private history: any;
    // Constructor
    constructor(props, context) {
        super(props, context);

        // Bind the event
        this.close = this.close.bind(this);
        this.onClick = this.onClick.bind(this);

        this.history = props.history;
    }

    // Method to close the dialog or panel
    close(actionType) {
        // Execute an action, based on the type
        switch (actionType) {
            // Hide the dialog
            case ActionTypes.HideDialog:
                this.props.actions.dialog.hide();
                break;
            // Hide the panel
            case ActionTypes.HidePanel:
                this.props.actions.panel.hide();
                break;
        }
    }

    // The click event for a menu item
    onClick(event, actionType?: string) {
        // Disable postback
        event.preventDefault();

        actionType && this.history.push('/' + actionType);

        /*
        // Execute an action, based on the type
        switch(actionType) {
            // Show the dialog
            case ActionTypes.ShowDialog:
                this.props.actions.dialog.show();
            break;
            // Show the panel
            case ActionTypes.ShowPanel:
                this.props.actions.panel.show();
            break;
        }
        */
    }

    // Method to render the component
    render() {
        // Get the "showDialog" state value from the properties.
        let { showDialog, showPanel } = this.props;
        return (
            <div>
                <Nav
                    groups={[
                        {
                            links: [
                                {
                                    name: 'Home',
                                    url: 'http://example.com',
                                    links: [
                                        {
                                            name: 'Activity',
                                            key: 'key1',
                                            url: '#',
                                            onClick: event => this.onClick(event, ActionTypes.OpenDetails + "/1")
                                        },
                                        {
                                            name: 'MSN',
                                            url: '#',
                                            key: 'key2',
                                            onClick: event => this.onClick(event, ActionTypes.ShowPanel)
                                        }
                                    ],
                                    isExpanded: true
                                },
                                { name: 'Documents', url: 'http://example.com', key: 'key3', isExpanded: true }
                            ]
                        }
                    ]}
                    expandedStateText={'expanded'}
                    collapsedStateText={'collapsed'}
                    selectedKey={'key3'}
                    expandButtonAriaLabel={'Expand or collapse'}
                />
                <DemoDialog
                    visible={showDialog}
                    closeDialog={event => this.close(ActionTypes.HideDialog)}
                />
                <DemoPanel
                    visible={showPanel}
                    closePanel={event => this.close(ActionTypes.HidePanel)}
                />
            </div>
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
            showDialog: state.dialog.showDialog,
            showPanel: state.panel.showPanel
        };
    },
    /**
     * Actions Mapper
     */
    (dispatch) => {
        return {
            actions: {
                dialog: bindActionCreators(dialogActions as any, dispatch),
                panel: bindActionCreators(panelActions as any, dispatch)
            }
        };
    }
)(withRouter(Navigation));