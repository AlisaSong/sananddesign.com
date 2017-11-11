import { connect } from 'react-redux';
import * as React from 'react';

interface AppProps {
}

class App extends React.Component<AppProps> {
    render() {
        return (
            <main>
                {this.props.children}
            </main>
        );
    }
}

export default connect((state: any) => { return {}; })(App);
