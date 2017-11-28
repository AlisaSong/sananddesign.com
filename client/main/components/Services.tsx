import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const weddingImage = require('../images/services-wedding-image.png');
const corporateImage = require('../images/services-corporate-image.png');
const realEstateImage = require('../images/services-real-estate-image.png');

import '../styles/services.css';

interface ServicesProps {
}

class Services extends React.Component<ServicesProps, any> {
    constructor(props: ServicesProps) {
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
                        <h1 className="services-title">Weddings | Corporate | Real Estate Staging</h1>
                        <h2 className="services-quote">Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.</h2>
                        <img className="services-image" src={weddingImage} />
                        <h2 className="services-subtitle">Weddings & Occasions</h2>
                        <p>
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <p>
                            Suspendisse sed justo, fermentum ac eros mi mauris cum. Commodo erat enim commodo pede nullam, nullam sem ac,
                        convallis montes luctus a porttitor, amet id vehicula nonummy nunc non, commodo proin fusce at. Dolor pulvinar
                        morbi augue eligendi platea, blandit ante arcu sed tristique, orci velit integer nullam placerat elementum, lacus
                        semper congue, laoreet praesent in feugiat ante. Morbi nulla, in eros quam, velit varius tincidunt venenatis elit
                        donec quisque, elit ipsum vel pretium nec. Lectus cursus sed dui quis nibh, faucibus nec curabitur amet suscipit nascetur,
                        vivamus mattis cursus odit.
                    </p>
                        <img className="services-image" src={corporateImage} />
                        <h2 className="services-subtitle">Corporate Floral Services</h2>
                        <p>
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <p>
                            Suspendisse sed justo, fermentum ac eros mi mauris cum. Commodo erat enim commodo pede nullam, nullam sem ac,
                        convallis montes luctus a porttitor, amet id vehicula nonummy nunc non, commodo proin fusce at. Dolor pulvinar
                        morbi augue eligendi platea, blandit ante arcu sed tristique, orci velit integer nullam placerat elementum, lacus
                        semper congue, laoreet praesent in feugiat ante. Morbi nulla, in eros quam, velit varius tincidunt venenatis elit
                        donec quisque, elit ipsum vel pretium nec. Lectus cursus sed dui quis nibh, faucibus nec curabitur amet suscipit nascetur,
                        vivamus mattis cursus odit.
                    </p>
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

export default connect((state: any) => { return {}; })(Services);
