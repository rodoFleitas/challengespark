import React from "react";
import { Switch } from "react-router-dom";
import { PrivateRoute } from "./helperRoutes";
import UsersTable from '../components/UsersTable.jsx'

const PrivateRoutes = ({isAdmin}) => {
    return (
      <Switch>
        <PrivateRoute exact path="/home" component={UsersTable} isAdmin={isAdmin} />
      </Switch>
    );
  };

  export default PrivateRoutes