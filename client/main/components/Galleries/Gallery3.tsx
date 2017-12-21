import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const galleryImage31 = require('../../images/gallery-3-1.jpg');
const galleryImage32 = require('../../images/gallery-3-2.jpg');
const galleryImage33 = require('../../images/gallery-3-3.jpg');
const galleryImage34 = require('../../images/gallery-3-4.jpg');
const galleryImage35 = require('../../images/gallery-3-5.jpg');
const galleryImage36 = require('../../images/gallery-3-6.jpg');

import '../../styles/galleries.css';

interface Gallery3Props {
}

class Gallery3 extends React.Component<Gallery3Props, any> {
    constructor(props: Gallery3Props) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <img className="galleries-banner-image-1" src={galleryImage34} />
                <div className="galleries-subtitle">Gallery 3</div>
                <div className="galleries-description">Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed.</div>
                <div className="galleries-row">
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage33} />
                        <img className="galleries-image" src={galleryImage36} />
                        <img className="galleries-image" src={galleryImage31} />
                    </div>
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage35} />
                        <img className="galleries-image" src={galleryImage32} />
                    </div>
                </div>
                <Footer />
                <ScrollUp />
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery3);
