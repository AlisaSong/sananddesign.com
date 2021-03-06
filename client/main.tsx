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
import Contact from './main/components/Contact';

import Gallery1 from './main/components/Galleries/Gallery1';
import Gallery2 from './main/components/Galleries/Gallery2';
import Gallery3 from './main/components/Galleries/Gallery3';
import Gallery4 from './main/components/Galleries/Gallery4';
import Gallery5 from './main/components/Galleries/Gallery5';

import Corporate from './main/components/Services/Corporate';
import RealEstate from './main/components/Services/RealEstate';
import Weddings from './main/components/Services/Weddings';

const store: Store<any> = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Router basename="/portfolio-sananddesign/">
            <main>
                <Route exact={true } component={Home} path={'/'} />
                <Route exact={true} component={About} path={'/about'} />
                <Route exact={true} component={Gallery} path={'/gallery'} />
                <Route component={Contact} path={'/contact'} />
                <Route exact={true} component={Gallery1} path={'/galleries/gallery1'} />
                <Route exact={true} component={Gallery2} path={'/galleries/gallery2'} />
                <Route exact={true} component={Gallery3} path={'/galleries/gallery3'} />
                <Route exact={true} component={Gallery4} path={'/galleries/gallery4'} />
                <Route exact={true} component={Gallery5} path={'/galleries/gallery5'} />
                <Route exact={true} component={Corporate} path={'/services/corporate'} />
                <Route exact={true} component={RealEstate} path={'/services/real-estate'} />
                <Route exact={true} component={Weddings} path={'/services/weddings'} />
            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
