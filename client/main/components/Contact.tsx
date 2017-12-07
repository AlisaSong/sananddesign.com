import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';
import Header from './Header';
import Footer from './Footer';

import '../styles/contact.css';

interface ContactProps {
}

class Contact extends React.Component<ContactProps, any> {
    constructor(props: ContactProps) {
        super(props);

        this.state = {
        }
    }

    render() {
        return (
            <section>
                <Header />
                <section className="section-wrapper">
                    <form action="https://formspree.io/alisasong@gmail.com"
                        method="POST">
                        <p>Name: </p><input type="text" name="name" />
                        <p>Email: </p><input type="email" name="_replyto" />
                        <p>Message:</p><textarea name="message" />
                        <input type="submit" value="Send" />
                    </form>
                    <Footer />
                </section>
            </section>
        )
    }
}

export default connect((state: any) => { return {}; })(Contact);
