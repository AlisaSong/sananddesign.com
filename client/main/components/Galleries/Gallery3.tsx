import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

interface Gallery3Props {
}

class Gallery3 extends React.Component<Gallery3Props, any> {
    constructor(props: Gallery3Props) {
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
            </section >
        )
    }
}

export default connect((state: any) => { return {}; })(Gallery3);
