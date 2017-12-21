import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollUp from './ScrollUp';

import '../styles/home.css';

const bannerImage = require('../images/home-banner-image.png');
const imageSmall1 = require('../images/home-image-1.png');
const imageSmall2 = require('../images/home-image-2.png');
const imageSmall3 = require('../images/home-image-3.png');
const imageSmall4 = require('../images/home-image-4.png');

const logoTransparent = require('../images/logo-transparent.png');


interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                <Header />
                <div className="banner-wrapper">
                    <img className="banner-image" src={bannerImage} />
                    <div className="text-overlay home-title text-shadow">S A N & D E S I G N</div>
                </div>
                <div className="trio-images-wrapper">
                    <img className="small-image" src={imageSmall1} />
                    <img className="small-image" src={imageSmall2} />
                    <img className="small-image" src={imageSmall4} />
                    <img className="small-image" src={imageSmall3} />
                </div>
                <Footer />
            <ScrollUp />
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
