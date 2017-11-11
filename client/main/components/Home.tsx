import { connect } from 'react-redux';
import * as React from 'react';

interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                HOME
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
