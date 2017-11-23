import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

import '../styles/index.css';
import '../styles/gallery.css';

interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps> {

    render() {
        return (
            <section>
                Gallery
            <Header />
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Gallery);
