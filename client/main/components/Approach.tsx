import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';

import '../styles/index.css';
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
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Approach);
