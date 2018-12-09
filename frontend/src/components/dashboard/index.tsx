import * as React from "react";
import Navigation from "../navigation";
import { debug } from "util";
import PersonList from '../personList';
import List from '../list';
/**
 * Dashboard
 */
const Dashboard = (props) => {
    // Render the component
    return (
        <div>
            <Navigation actions={ [] } showDialog={false}  />
            <PersonList />
            <List />
        </div>
    );
}

export default Dashboard;