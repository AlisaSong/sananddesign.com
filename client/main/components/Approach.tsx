import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

const bannerImage = require('../images/approach-banner-image.png');

import '../styles/approach.css';

interface ApproachProps {
}

class Approach extends React.Component<ApproachProps, any> {
    constructor(props: ApproachProps) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <section className="approach-wrapper">
                        <img src={bannerImage} />
                        <h1 className="approach-title">Our Approach</h1>
                        <h2 className="approach-quote">Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.</h2>
                        <p>
                            Suspendisse sed justo, fermentum ac eros mi mauris cum. Commodo erat enim commodo pede nullam, nullam sem ac,
                        convallis montes luctus a porttitor, amet id vehicula nonummy nunc non, commodo proin fusce at. Dolor pulvinar
                        morbi augue eligendi platea, blandit ante arcu sed tristique, orci velit integer nullam placerat elementum, lacus
                        semper congue, laoreet praesent in feugiat ante. Morbi nulla, in eros quam, velit varius tincidunt venenatis elit
                        donec quisque, elit ipsum vel pretium nec. Lectus cursus sed dui quis nibh, faucibus nec curabitur amet suscipit nascetur,
                        vivamus mattis cursus odit.
                    </p>
                        <Footer />
                    </section>
                </section>
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Approach);
