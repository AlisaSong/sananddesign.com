import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const galleryImage20 = require('../../images/gallery-2-0.png');
const galleryImage21 = require('../../images/gallery-2-1.png');
const galleryImage22 = require('../../images/gallery-2-2.png');
const galleryImage23 = require('../../images/gallery-2-3.png');
const galleryImage24 = require('../../images/gallery-2-4.png');
const galleryImage25 = require('../../images/gallery-2-5.png');

import '../../styles/galleries.css';

interface Gallery2Props {
}

class Gallery2 extends React.Component<Gallery2Props, any> {
    constructor(props: Gallery2Props) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <img className="galleries-banner-image-1" src={galleryImage23} />
                <div className="galleries-subtitle">Gallery 2</div>
                <div className="galleries-description"></div>
                <div className="galleries-row">
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage24} />
                        <img className="galleries-image" src={galleryImage21} />
                        <img className="galleries-image" src={galleryImage22} />
                    </div>
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage25} />
                        <img className="galleries-image" src={galleryImage20} />
                    </div>
                </div>
                <Footer />
                <ScrollUp />
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery2);
