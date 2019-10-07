import React from 'react'
import { Switch, Route } from "react-router-dom";
import routes from "./router";

const Router = () => {
    return(
        <Switch>
            {routes.map(data => {
                return <Route
                    key={data.path} 
                    exact={data.exact} 
                    path={data.path}
                    component={data.component}>
                </Route>
            })}
        </Switch>
    )
};

export default Router
