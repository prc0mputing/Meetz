import * as React from "react";
import { render } from "react-dom";
import { Provider } from "react-redux";
import configureStore from "./store/configureStore";
import Dashboard from "./components/dashboard";
import { initializeIcons } from 'office-ui-fabric-react/lib/Icons';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import RouteItem from './common/routeitem';
import * as listActions from "./actions/listActions";

const routes: Array<RouteItem> = require('./routes.json');

const store = configureStore();
store.dispatch(listActions.loadItems() as any);

initializeIcons("https://static2.sharepointonline.com/files/fabric/assets/icons/");

render(
    <Provider store={store}>
        <Router>
            <Route path="/:filter?" component={Dashboard} />
        </Router>
    </Provider>,
    document.getElementById("app")
);