import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

interface AboutProps {
}

class About extends React.Component<AboutProps> {
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

export default connect((state: any) => { return {}; })(About);
