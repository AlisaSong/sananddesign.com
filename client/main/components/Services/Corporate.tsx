import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';
import ScrollUp from '../ScrollUp';

const corporateImage = require('../../images/services-corporate-image.png');

import '../../styles/services.css';

interface CorporateProps {
}

class Corporate extends React.Component<CorporateProps, any> {
    constructor(props: CorporateProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                    <div className="services-wrapper">
                        <img className="services-image" src={corporateImage} />
                        <h2 className="services-title services-text">Corporate Floral Services</h2>
                        <p className="services-text">
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed.
                        </p>
                        <h2 className="services-subtitle services-text">Menu</h2>
                        <ul className="services-menu services-text">
                            <li className="services-menu-item">Ultricies morbi - consectetuer</li>
                            <li className="services-menu-item">ullamcorper rutrum - urna</li>
                            <li className="services-menu-item">a vestibulum neque - parturient</li>
                            <li className="services-menu-item">ante diam mollis - id sociis</li>
                            <li className="services-menu-item">maecenas pellentesque - vestibulum</li>
                        </ul>
                        <Footer />
                    </div>
                <ScrollUp />
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Corporate);
