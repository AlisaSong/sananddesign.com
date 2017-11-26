import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

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
                </section>
            </section>
    )}
}

export default connect((state: any) => { return {}; })(Services);
