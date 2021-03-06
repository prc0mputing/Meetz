import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./pages/dashboard";
import Details from "./components/details";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteItem from './common/routeitem';
import * as listActions from "./actions/listActions";
import * as personActions from "./actions/personActions";
import * as detailsActions from "./actions/detailsActions";

const routes: Array<RouteItem> = require('./routes.json');

const store = configureStore();
store.dispatch(listActions.loadItems() as any);
store.dispatch(personActions.getList() as any);
initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");


const OpenDetails = (props) => {
    store.dispatch(detailsActions.viewDetails(props.match.params["id"]) as any);
    return (
        <Details />
    );
};

render(
    <Provider store={store}>
        <Router>
            <div>
                <Route path="/:filter?" component={Dashboard} />
                <Route path="/OpenDetails/:id?" component={OpenDetails} />
            </div>
        </Router>
    </Provider>,
    document.getElementById("app")
);
