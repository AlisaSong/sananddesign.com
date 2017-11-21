import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/footer.css';

interface FooterProps {
}

class Footer extends React.Component<FooterProps, any> {
    constructor(props: FooterProps) {
        super(props);

        this.state = {
        }

    }
    render() {
        return (
            <section>
                Footer
            </section>
    }
}

export default connect((state: any) => { return {}; })(Footer);
