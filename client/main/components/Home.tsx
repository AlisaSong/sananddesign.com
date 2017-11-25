import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

import '../styles/index.css';
import '../styles/home.css';

const bannerImage = require('../images/home-banner-image.png');
const imageSmall1 = require('../images/home-image-1.png');
const imageSmall2 = require('../images/home-image-2.png');
const imageSmall3 = require('../images/home-image-3.png');
const logoTransparent = require('../images/logo-transparent.png');


interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <div className="banner-wrapper">
                        <img className="banner-image" src={bannerImage} />
                        <div className="text-overlay text-shadow">San & Design</div>
                    </div>
                    <div className="trio-images-wrapper">
                        <img className="small-image" src={imageSmall1} />
                        <img className="small-image" src={imageSmall2} />
                        <img className="small-image" src={imageSmall3} />
                    </div>
                </section>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
