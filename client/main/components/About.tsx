import { connect } from 'react-redux';
import * as React from 'react';
import Header from './Header';
import Footer from './Footer';

import '../styles/about.css';

const workingImage = require('../images/about-office-shot.png');
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
                        <h1 className="about-title">About San & Design</h1>
                        <p className="about-text-description">
                            Lorem ipsum dolor sit amet, odio eros, ante sed vehicula vivamus ipsum, suspendisse class quisque ante ut, maecenas nulla.
                        Justo tellus. Tempor interdum per, lacus tempor phasellus tortor risus. Viverra pede commodo fermentum vestibulum.
                        </p>
                        <p className="about-text-description">
                            Quis ultricies a ut lobortis,elit ad consequat morbi neque eu semper.
                            Purus in, etiam at aenean est, nulla interdum nulla nullam nec.
                        </p>
                        <p className="about-text-description">
                            Tempus consectetuer interdum lorem malesuada,
                            metus ut veritatis, gravida ante. Condimentum platea blandit quisque ut, sed nec sit, dui ac class diam rutrum massa feugiat.
                            Venenatis natoque convallis, quam amet vestibulum, consequat quam vulputate inceptos justo ac quam.
                        </p>
                        <p className="about-text-description">
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <img className="about-person-image" src={workingImage} />
                        <h1 className="about-title">Jane Kang</h1>
                        <h2 className="about-title-description">Owner, Head Designer</h2>
                        <p className="about-text-description">
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                        </p>
                    <Footer />
                </div>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(About);
