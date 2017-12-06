import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

const realEstateImage = require('../../images/services-real-estate-image.png');

import '../../styles/services.css';

interface RealEstateProps {
}

class RealEstate extends React.Component<RealEstateProps, any> {
    constructor(props: RealEstateProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <section className="services-wrapper">
                        <h1 className="services-title services-text">Real Estate Staging</h1>
                        <h2 className="services-quote services-text">Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.</h2>
                        <img className="services-image" src={realEstateImage} />
                        <h2 className="services-subtitle services-text">Real Estate Staging</h2>
                        <p className="services-text">
                            Viverra lacus id. Molestie fringilla sed sodales urna feugiat orci, placerat vivamus lacus tincidunt mi justo, sit diam
                        eu pede mauris. Quis nec aliquam. Sed purus curabitur amet sodales neque, a cursus ornare turpis, risus praesent dis
                        vehicula integer, faucibus neque, in euismod.
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
                    </section>
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(RealEstate);
