import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

interface Gallery1Props {
}

class Gallery1 extends React.Component<Gallery1Props, any> {
    constructor(props: Gallery1Props) {
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

export default connect((state: any) => { return {}; })(Gallery1);
