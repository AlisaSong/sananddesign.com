import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

interface AboutProps {
}

class About extends React.Component<AboutProps> {
    render() {
        return (
            <section>
                About
            <Header />
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(About);
