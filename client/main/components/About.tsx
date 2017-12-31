import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';
import ScrollUp from './ScrollUp';

import '../styles/about.css';

const about1Image = require('../images/about-image-1.png');
const about2Image = require('../images/about-image-2.png');
const about3Image = require('../images/about-image-3.png');
const about4Image = require('../images/about-image-4.png');

interface AboutProps {
}

class About extends React.Component<AboutProps> {
    render() {
        return (
            <section>
                <Header />
                    <div className="text-wrapper">
                        <p className="about-image-small-wrapper">
                            <img className="about-image-small" src={about1Image} />
                            <img className="about-image-small" src={about2Image} />
                            <img className="about-image-small" src={about3Image} />
                            <img className="about-image-small" src={about4Image} />
                        </p>
                        <h1 className="about-title">About Jane</h1>
                        <h2 className="about-title-description">Owner, Head Designer</h2>
                        <p className="about-text-description">
                        Jane's love for floral design blossomed through her strong interest in art, architecture, and medicine.
                        She studied architecture, classics, and biophysics at the University of Washington, and yearned for a career that allowed her to
                        help others and be creative. Jane uses flowers as a medium to express oneself. Her reward is found in the joy of a happy client
                        and when she is able to convey a message through the material she uses from Mother Nature.
                        </p>
                        <h1 className="about-title">About San & Design</h1>
                        <p className="about-text-description">
                        Jane's fondness to nature was nurtured as she grew up in the dynamic landscapes of the Colorado Rockies, through
                        the alluring change of seasons in the Korean mountains, and the diverse geographies of Washington. Jane's inspiration
                        comes from "san," meaning "mountain" in Korean, Japanese, and Chinese. Thus the name, San & Design, where the floral
                        designs are heavily influenced by nature and her asian heritage.
                        </p>
                    <Footer />
                    </div>
                <ScrollUp />
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(About);
