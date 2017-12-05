import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

import '../styles/contact.css';

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
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(RealEstate);
