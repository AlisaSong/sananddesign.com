import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/gallery.css';

interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps> {

    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery);
