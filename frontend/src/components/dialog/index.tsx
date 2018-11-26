import * as React from "react";
import {
    Dialog,
    DialogType
} from "office-ui-fabric-react";

/**
 * Demo Dialog
 */
const DemoDialog = ({ closeDialog, visible }) => {
    return (
        <Dialog
            hidden={!visible}
            dialogContentProps={{ type: DialogType.close }}
            // isBlocking={true}
            onDismiss={closeDialog}
            title="Demo Dialog">
            <h5>This is an example of creating a dialog.</h5>
        </Dialog>
    );
}

export default DemoDialog;