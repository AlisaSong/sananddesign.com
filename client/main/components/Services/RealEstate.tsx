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
                        <h1 className="services-title">Real Estate Staging</h1>
                        <h2 className="services-quote">Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.</h2>
                        <img className="services-image" src={realEstateImage} />
                        <h2 className="services-subtitle">Real Estate Staging</h2>
                        <p>
                            Viverra lacus id. Molestie fringilla sed sodales urna feugiat orci, placerat vivamus lacus tincidunt mi justo, sit diam
                        eu pede mauris. Quis nec aliquam. Sed purus curabitur amet sodales neque, a cursus ornare turpis, risus praesent dis
                        vehicula integer, faucibus neque, in euismod.
                        </p>
                        <p>
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <Footer />
                    </section>
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(RealEstate);
