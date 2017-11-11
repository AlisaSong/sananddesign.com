import { connect } from 'react-redux';
import * as React from 'react';

interface WelcomeProps {
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return (
            <section>
                WELCOME
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Welcome);
