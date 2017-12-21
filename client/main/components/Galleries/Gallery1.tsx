import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const galleryImage10 = require('../../images/gallery-1-0.png');
const galleryImage11 = require('../../images/gallery-1-1.png');
const galleryImage13 = require('../../images/gallery-1-3.png');
const galleryImage14 = require('../../images/gallery-1-4.png');
const galleryImage15 = require('../../images/gallery-1-5.png');
const galleryImage16 = require('../../images/gallery-1-6.png');
const galleryImage17 = require('../../images/gallery-1-7.png');
const galleryImage18 = require('../../images/gallery-1-8.png');
const galleryImage19 = require('../../images/gallery-1-9.png');
const galleryImage110 = require('../../images/gallery-1-10.png');

import '../../styles/galleries.css';

interface Gallery1Props {
}

class Gallery1 extends React.Component<Gallery1Props, any> {
    constructor(props: Gallery1Props) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <img className="galleries-banner-image-1" src={galleryImage11} />
                <div className="galleries-subtitle">Gallery 1</div>
                <div className="galleries-description">Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed.</div>
                <div className="galleries-row">
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage10} />
                        <img className="galleries-image" src={galleryImage13} />
                        <img className="galleries-image" src={galleryImage14} />
                        <img className="galleries-image" src={galleryImage15} />
                    </div>
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage16} />
                        <img className="galleries-image" src={galleryImage17} />
                        <img className="galleries-image" src={galleryImage18} />
                        <img className="galleries-image" src={galleryImage19} />
                        <img className="galleries-image" src={galleryImage110} />
                    </div>
                </div>
                <Footer />
                <ScrollUp />
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery1);
