import * as React from "react";
import {
    Dialog,
    DialogType
} from "office-ui-fabric-react";

/**
 * Demo Dialog
 */
const DetailsDialog = ({closeDialog}) => {
    return (
        <Dialog
            isBlocking={true}
            isOpen={false}
            onDismiss={closeDialog}
            type={DialogType.largeHeader}
            title="Details Dialog">
            <h5>He is going to be written by request params</h5>
        </Dialog>
    );
}

export default DetailsDialog;