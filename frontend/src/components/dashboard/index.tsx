import * as React from "react";
import Navigation from "../navigation";
import { debug } from "util";
import PersonList from '../personList';
import List from '../list';
import { Panel, PanelType, DefaultButton } from "office-ui-fabric-react";
import "./dashboard.css";
/**
 * Dashboard
 */
interface Props {
    showPanel: false
}

/**
 * Demo List
 */
class Dashboard extends React.Component<Props, any> {

    constructor(props: Props) {
        super(props);
        this.state = { showPanel: false };
    }

    public render() {
        return (
            <div>
                
                <DefaultButton text="Open panel" onClick={this._setShowPanel(true)} />
                <Panel
                    isBlocking={false}
                    isOpen={this.state.showPanel}
                    onDismiss={this._setShowPanel(false)}
                    type={PanelType.smallFixedFar}
                    headerText="Non-Modal Panel"
                    hasCloseButton={false}
                    isFooterAtBottom={true}
                    onRenderFooterContent={this._onRenderFooterContent}
                    >
                    <Navigation 
                        actions={[]} 
                        showDialog={false}

                         />
                </Panel>
                <PersonList />
            </div >
        );
    }

    private _setShowPanel = (showPanel: boolean): (() => void) => {
        return (): void => {
            this.setState({ showPanel });
        };
    };

    private _onClosePanel = () => {
        this.setState({ showPanel: false });
      };

    private _onRenderFooterContent = (): JSX.Element => {
        return (
          <div>
            <DefaultButton onClick={this._onClosePanel}>Cancel</DefaultButton>
          </div>
        );
      };

}

export default Dashboard;