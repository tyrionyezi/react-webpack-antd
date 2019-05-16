import React from 'react'
import {BrowserRouter, HashRouter, Switch, Route} from "react-router-dom";
import Home from './../../src/home/home.jsx'
import Login from './../../src/pages/login/index.component.jsx';
import NoMatch from './../../src/pages/tipPages/noMatch/index.component.jsx';

export default () => (
    <BrowserRouter>
        <Switch>
            <Route exact path="/" component={Home}>
                {/* <Route path="/echarts" component={menu.echarts} /> */}
            </Route>
            {/* <Route path="/login" component={Login} /> */}
            <Route path="/login" component={Login}/>
            <Route path="*" component={NoMatch} />
            <Route component={NoMatch} />
        </Switch>
    </BrowserRouter>
)