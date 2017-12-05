import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from '../Header';
import Footer from '../Footer';

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
                <section className="section-wrapper">
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Weddings);
