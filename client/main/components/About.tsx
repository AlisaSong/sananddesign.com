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
                <section className="section-wrapper">
                    <section className="text-wrapper">
                        <p className="about-image-small-wrapper">
                            <img className="about-image-small" src={about1Image} />
                            <img className="about-image-small" src={about2Image} />
                            <img className="about-image-small" src={about3Image} />
                            <img className="about-image-small" src={about4Image} />
                        </p>
                        <h1>About San & Design</h1>
                        <p>
                            Lorem ipsum dolor sit amet, odio eros, ante sed vehicula vivamus ipsum, suspendisse class quisque ante ut, maecenas nulla.
                        Justo tellus. Tempor interdum per, lacus tempor phasellus tortor risus. Viverra pede commodo fermentum vestibulum.
                        </p>
                        <p>
                            Quis ultricies a ut lobortis,elit ad consequat morbi neque eu semper.
                        Purus in, etiam at aenean est, nulla interdum nulla nullam nec.
                    </p>
                        <p>
                            Tempus consectetuer interdum lorem malesuada,
                        metus ut veritatis, gravida ante. Condimentum platea blandit quisque ut, sed nec sit, dui ac class diam rutrum massa feugiat.
                        Venenatis natoque convallis, quam amet vestibulum, consequat quam vulputate inceptos justo ac quam.
                    </p>
                        <p>
                            Suspendisse sed justo, fermentum ac eros mi mauris cum. Commodo erat enim commodo pede nullam, nullam sem ac,
                        convallis montes luctus a porttitor, amet id vehicula nonummy nunc non, commodo proin fusce at. Dolor pulvinar
                        morbi augue eligendi platea, blandit ante arcu sed tristique, orci velit integer nullam placerat elementum, lacus
                        semper congue, laoreet praesent in feugiat ante. Morbi nulla, in eros quam, velit varius tincidunt venenatis elit
                        donec quisque, elit ipsum vel pretium nec. Lectus cursus sed dui quis nibh, faucibus nec curabitur amet suscipit nascetur,
                        vivamus mattis cursus odit. Id non, eveniet ut magna nec, nonummy vivamus nonummy dolor facilisis, aenean eros sed,
                        quis sed modi luctus.
                    </p>
                        <p>
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <p>
                            Viverra lacus id. Molestie fringilla sed sodales urna feugiat orci, placerat vivamus lacus tincidunt mi justo, sit diam
                        eu pede mauris. Quis nec aliquam. Sed purus curabitur amet sodales neque, a cursus ornare turpis, risus praesent dis
                        vehicula integer, faucibus neque, in euismod.
                    </p>
                        <p>
                            Hac ultricies ac semper. Vitae vehicula est luctus bibendum sed, vivamus elementum,
                        volutpat venenatis, ante sapien arcu fermentum euismod. Sollicitudin senectus quis, posuere mollis
                        ligula habitant, sem luctus dolor augue donec, etiam eget, mauris luctus amet velit turpis. Wisi ipsum vel
                        condimentum, neque in tellus massa elementum lorem, phasellus vestibulum ante sed in aliquam. Mauris posuere in,
                        pede accumsan, phasellus tincidunt, dis justo purus, sit suspendisse et eget. Iaculis cursus, posuere condimentum eu,
                        ornare nam nulla nonummy aliquam at quisque.
                    </p>

                        <img src={workingImage} />
                        <h1>Jane Kang</h1>
                        <h2>Owner, Head Designer</h2>
                        <p>
                            Ultricies morbi consectetuer, ullamcorper rutrum urna a vestibulum neque parturient, ante diam mollis id sociis
                        maecenas pellentesque, vestibulum vel platea aliquam orci. Ante porta dolor sed. Amet nulla. Nulla eget vel est
                        venenatis vel, wisi et nonummy, ante ipsum ante cras lectus hendrerit condimentum, eu tellus sit, vel dui. Eu
                        pellentesque nulla dui nec, rutrum suspendisse dui in, id potenti eleifend eleifend sed nec dui. Porta pharetra nec
                        malesuada, neque cursus nonummy litora tristique, aliquam maecenas, tincidunt convallis eleifend dis, ultricies ut nam.
                    </p>
                        <p>
                            Viverra lacus id. Molestie fringilla sed sodales urna feugiat orci, placerat vivamus lacus tincidunt mi justo, sit diam
                        eu pede mauris. Quis nec aliquam. Sed purus curabitur amet sodales neque, a cursus ornare turpis, risus praesent dis
                        vehicula integer, faucibus neque, in euismod.
                    </p>
                        <p>
                            Hac ultricies ac semper. Vitae vehicula est luctus bibendum sed, vivamus elementum,
                        volutpat venenatis, ante sapien arcu fermentum euismod. Sollicitudin senectus quis, posuere mollis
                        ligula habitant, sem luctus dolor augue donec, etiam eget, mauris luctus amet velit turpis. Wisi ipsum vel
                        condimentum, neque in tellus massa elementum lorem, phasellus vestibulum ante sed in aliquam. Mauris posuere in,
                        pede accumsan, phasellus tincidunt, dis justo purus, sit suspendisse et eget. Iaculis cursus, posuere condimentum eu,
                        ornare nam nulla nonummy aliquam at quisque.
                    </p>
                    </section>
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(About);
