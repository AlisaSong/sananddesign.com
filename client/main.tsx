import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Store, createStore } from 'redux';
import { Provider } from 'react-redux';

import { reducer } from './main/reducer';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';

import './main/styles/index.css';
import 'font-awesome/css/font-awesome.css';

import Home from './main/components/Home';
import Welcome from './main/components/Welcome';
import About from './main/components/About';
import Gallery from './main/components/Gallery';
import Approach from './main/components/Approach';
import Services from './main/components/Services';
import Contact from './main/components/Contact';

const store: Store<any> = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <main>
                <Route component={Home} path={'/home'} />
                <Route exact={true} component={Welcome} path={'/'} />
                <Route component={About} path={'/about'} />
                <Route component={Gallery} path={'/gallery'} />
                <Route component={Approach} path={'/approach'} />
                <Route component={Contact} path={'/contact'} />
                <Route component={Services} path={'/services'} />
            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
