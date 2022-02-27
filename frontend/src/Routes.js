import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';
import NotFound from './pages/NotFound';
import Signin from './pages/Signin';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
            <Route exact path="/signin">
                <Signin/>
            </Route>
            <Route>
                <NotFound />
            </Route>
        </Switch>
    );
}