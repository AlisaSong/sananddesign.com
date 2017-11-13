import { connect } from 'react-redux';
import * as React from 'react';

import '../styles/welcome.css';

const sampleWelcomeImage = require('../images/samplewelcomeimage.png');

interface WelcomeProps {
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return (
            <section>
                <div className="welcomeImageWrapper">
                    <img className="welcomeImage" src={sampleWelcomeImage} />
                </div>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Welcome);
