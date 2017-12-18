import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../styles/gallery.css';

const galleryImage1 = require('../images/gallery-1-0.png');
const galleryImage2 = require('../images/gallery-2-0.png');
const galleryImage3 = require('../images/gallery-3-0.png');
const galleryImage4 = require('../images/gallery-4-0.png');
const galleryImage5 = require('../images/gallery-5-0.png');

interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps, any> {
    constructor(props: GalleryProps) {
        super(props);

        this.state = {
        };
    }

    render() {
        return (
            <section>
                <Header />
                <div className="gallery-wrapper">
                    <div className="row">
                        <div className="column">
                            <Link to="./galleries/gallery1"><img className="gallery-image" src={galleryImage1} /></Link>
                            <Link to="./galleries/gallery5"><img className="gallery-image" src={galleryImage5} /></Link>
                        </div>
                        <div className="column">
                            <Link to="./galleries/gallery2"><img className="gallery-image" src={galleryImage2} /></Link>
                            <Link to="./galleries/gallery4"><img className="gallery-image" src={galleryImage4} /></Link>
                        </div>
                        <div className="column">
                            <Link to="./galleries/gallery3"><img className="gallery-image" src={galleryImage3} /></Link>
                        </div>
                    </div>
                </div>
                <Footer />
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery);
