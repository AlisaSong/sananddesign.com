import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/welcome.css';

const sampleWelcomeImage = require('../images/samplewelcomeimage.png');
const sampleLogoImage = require('../images/samplelogoimage.png')

interface WelcomeProps {
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return (
            <section>
                <div className="welcomeImageWrapper">
                    <img className="welcomeImage" src={sampleWelcomeImage} />
                </div>
                <div className="welcomeTextWrapper">
                    <div className="center">
                        <img className="sampleLogo" src={sampleLogoImage} />
                        <h1 className="titleText">San & Design</h1>
                        <h2 className="descriptionText">floral studio</h2>
                        <h3 className="descriptionText">established 2017</h3>
                        <Link to="/Home">enter here</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Welcome);
