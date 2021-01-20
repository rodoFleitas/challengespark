import React from "react";
import { Switch } from "react-router-dom";
import { PublicRoute } from "./helperRoutes";
import FormEditRegister from '../components/FormEditRegister'
import Profile from '../components/Profile'
import Login from '../components/Login'

const PublicRoutes = () => {
    return (
      <Switch>
        <PublicRoute exact path="/" component={Login} />
        <PublicRoute exact path="/register" component={FormEditRegister} />
        <PublicRoute exact path="/user/profile" component={Profile} />
      </Switch>
    );
  };

  export default PublicRoutes