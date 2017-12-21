import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const galleryImage40 = require('../../images/gallery-4-0.png');
const galleryImage41 = require('../../images/gallery-4-1.png');
const galleryImage42 = require('../../images/gallery-4-2.png');
const galleryImage43 = require('../../images/gallery-4-3.png');
const galleryImage44 = require('../../images/gallery-4-4.png');
const galleryImage45 = require('../../images/gallery-4-5.png');
const galleryImage46 = require('../../images/gallery-4-6.png');

import '../../styles/galleries.css';

interface Gallery4Props {
}

class Gallery4 extends React.Component<Gallery4Props, any> {
    constructor(props: Gallery4Props) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <img className="galleries-banner-image-1" src={galleryImage45} />
                <div className="galleries-subtitle">Gallery 4</div>
                <div className="galleries-description">Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed.</div>
                <div className="galleries-row">
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage44} />
                        <img className="galleries-image" src={galleryImage42} />
                        <img className="galleries-image" src={galleryImage46} />
                        <img className="galleries-image" src={galleryImage43} />
                    </div>
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage41} />
                        <img className="galleries-image" src={galleryImage40} />
                    </div>
                </div>
                <Footer />
                <ScrollUp />
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery4);
