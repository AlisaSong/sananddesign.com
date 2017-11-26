import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

import '../styles/gallery.css';

interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps> {

    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery);
