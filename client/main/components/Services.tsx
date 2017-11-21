import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
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
                Services
            </section>
    )}
}

export default connect((state: any) => { return {}; })(Services);
