import React from "react";
import { Switch, Route, Link } from 'react-router-dom';

import Home from './pages/Home';
import About from './pages/About';

export default () => {
    return(
        <Switch>
            <Route exact path="/">
                <Home/>
            </Route>
            <Route exact path="/about">
                <About/>
            </Route>
           
        </Switch>
    );
}