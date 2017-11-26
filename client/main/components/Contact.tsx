import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../styles/contact.css';

interface ContactProps {
}

class Contact extends React.Component<ContactProps, any> {
    constructor(props: ContactProps) {
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
    )}
}

    export default connect((state: any) => { return {}; })(Contact);
