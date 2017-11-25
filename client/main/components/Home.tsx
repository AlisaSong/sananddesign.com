import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

import '../styles/index.css';
import '../styles/home.css';

const bannerImage = require('../images/home-banner-image.png');
const logoTransparent = require('../images/logo-transparent.png');


interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                HOME
            <Header />
            <div className="banner-wrapper">
                    <img className="banner-image" src={bannerImage} />
                    <div className="text-overlay">San & Design</div>
            </div>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
