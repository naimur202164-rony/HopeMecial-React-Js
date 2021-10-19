import React from 'react';
import {
    Redirect, useHistory, useLocation, BrowserRouter as Router,
    Switch,
    Route,
    Link,
} from 'react-router';
import UseAuth from './../../hooks/UseAuth';
const PrivateRoute = ({ children, ...rest }) => {
    const { user } = UseAuth()
    let history = useHistory();
    let location = useLocation();
    return (
        <Route
            {...rest}
            render={({ location }) => user.email ?
                children :
                <Redirect
                    to={{
                        pathname: '/login',
                        state: { from: location }
                    }}
                ></Redirect>}
        >

        </Route>
    );
};

export default PrivateRoute