import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/welcome.css';

const welcomeImage = require('../images/welcome-image.png');
const logoBlack = require('../images/logo-black.png')

interface WelcomeProps {
}

class Welcome extends React.Component<WelcomeProps> {
    render() {
        return (
            <section>
                <div className="welcome-image-wrapper">
                    <img className="welcome-image" src={welcomeImage} />
                </div>
                <div className="welcome-text-wrapper">
                    <div className="center">
                        <img className="logo-black" src={logoBlack} />
                        <h1 className="title-text">San & Design</h1>
                        <h2 className="description-text">floral studio</h2>
                        <h3 className="description-text">established 2017</h3>
                        <Link to="/home">enter here</Link>
                    </div>
                </div>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Welcome);
