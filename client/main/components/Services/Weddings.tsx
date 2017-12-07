import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import '../../styles/services.css';

const weddingImage = require('../../images/services-wedding-image.png');

interface WeddingsProps {
}

class Weddings extends React.Component<WeddingsProps, any> {
    constructor(props: WeddingsProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                    <div className="services-wrapper">
                    <img className="services-image" src={weddingImage} />
                    <h1 className="services-title services-text">Weddings & Occasions</h1>
                    <h2 className="services-quote services-text">Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.</h2>
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
                </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Weddings);
