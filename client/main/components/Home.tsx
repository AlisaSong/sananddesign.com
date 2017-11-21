import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';

interface HomeProps {
}

class Home extends React.Component<HomeProps> {
    render() {
        return (
            <section>
                HOME
            <Header />
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Home);
