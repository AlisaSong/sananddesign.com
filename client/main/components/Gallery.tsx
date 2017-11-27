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
            galleries: [{
                displayText: 'Gallery 1',
                image: galleryImage1,
                link: '/gallery/gallery1'
            }, {
                displayText: 'Gallery 2',
                image: galleryImage2,
                link: '/gallery/gallery2'
            }, {
                displayText: 'Gallery 3',
                image: galleryImage3,
                link: '/gallery/gallery3'
            }, {
                displayText: 'Gallery 4',
                image: galleryImage4,
                link: '/gallery/gallery4'
            }, {
                displayText: 'Gallery 5',
                image: galleryImage5,
                link: '/gallery/gallery5'
            }]
        };
    }

    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <section className="gallery-wrapper">
                        <h1>Gallery</h1>
                        <ul className="galleries">
                            {this.state.galleries.map((gallery, index) =>
                                <li className="gallery"
                                    key={index}>
                                    <Link to={gallery.link}>
                                        <img src={gallery.image} />
                                        <p className="gallery-title">{gallery.displayText}</p>
                                    </Link>
                                </li>
                            )}
                        </ul>
                        <Footer />
                    </section>
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery);
