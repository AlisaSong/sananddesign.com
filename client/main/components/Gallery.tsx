import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/gallery.css';

interface GalleryProps {
}

class Gallery extends React.Component<GalleryProps, any> {
    constructor(props: GalleryProps) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                Gallery
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery);
