import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './main/reducer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import Home from './main/components/Home';
import Welcome from './main/components/Welcome';

const store: Store<any> = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <main>
                <Route component={Home} path={'/Home'} />
                <Route exact={true} component={Welcome} path={'/'} />
            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
