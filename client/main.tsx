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
import Services from './main/components/Services';
import Contact from './main/components/Contact';

import Gallery1 from './main/components/Galleries/Gallery1';
import Gallery2 from './main/components/Galleries/Gallery2';
import Gallery3 from './main/components/Galleries/Gallery3';

import Corporate from './main/components/Services/Corporate';
import RealEstate from './main/components/Services/RealEstate';
import Weddings from './main/components/Services/Weddings';



const store: Store<any> = createStore(reducer, {});

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <main>
                <Route component={Home} path={'/home'} />
                <Route exact={true} component={Welcome} path={'/'} />
                <Route component={About} path={'/about'} />
                <Route component={Gallery} path={'/gallery'} />
                <Route component={Contact} path={'/contact'} />
                <Route component={Services} path={'/services'} />
                <Route component={Gallery1} path={'/galleries/gallery1'} />
                <Route component={Gallery2} path={'/galleries/gallery2'} />
                <Route component={Gallery3} path={'/galleries/gallery3'} />
                <Route component={Corporate} path={'/corporate'} />
                <Route component={RealEstate} path={'/realestate'} />
                <Route component={Weddings} path={'/weddings'} />
            </main>
        </Router>
    </Provider>,
    document.getElementById('app')
);
