import React from 'react'
import { Redirect, Route } from 'react-router-dom';

export const PublicRoute = ({component, ...options}) => { 
    return <Route {...options} component={component} />
}

export const PrivateRoute = ({isAdmin, component, ...options}) => {
    if(isAdmin) return <Route {...options} component={component} />
    return <Redirect to="/" />
}