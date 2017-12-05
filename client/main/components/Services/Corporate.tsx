import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

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
                <section className="section-wrapper">
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Corporate);
