import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const galleryImage50 = require('../../images/gallery-5-0.png');
const galleryImage51 = require('../../images/gallery-5-1.png');
const galleryImage52 = require('../../images/gallery-5-2.png');
const galleryImage53 = require('../../images/gallery-5-3.png');
const galleryImage54 = require('../../images/gallery-5-4.png');
const galleryImage55 = require('../../images/gallery-5-5.png');
const galleryImage56 = require('../../images/gallery-5-6.png');

import '../../styles/galleries.css';

interface Gallery5Props {
}

class Gallery5 extends React.Component<Gallery5Props, any> {
    constructor(props: Gallery5Props) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <img className="galleries-banner-image-2" src={galleryImage53} />
                <img className="galleries-banner-image-2" src={galleryImage55} />
                <div className="galleries-subtitle">Gallery 5</div>
                <div className="galleries-description">Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed.</div>
                <div className="galleries-row">
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage54} />
                        <img className="galleries-image" src={galleryImage50} />
                    </div>
                    <div className="galleries-column">
                        <img className="galleries-image" src={galleryImage51} />
                        <img className="galleries-image" src={galleryImage52} />
                        <img className="galleries-image" src={galleryImage56} />
                    </div>
                </div>
                <Footer />
                <ScrollUp />
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery5);
