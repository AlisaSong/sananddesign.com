import * as React from 'react';
import { Route } from 'react-router';

import App from './main/components/App';
import Home from './main/components/Home';
import Welcome from './main/components/Welcome';



export const routes = (
    <App>
        <Route component={Home} path={'/Home'} />
        <Route exact={true} component={Welcome} path={'/'} />
    </App>
)
