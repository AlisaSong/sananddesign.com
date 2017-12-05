import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

interface HeaderProps {
}

class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isDropdownMenuVisible: false,
            servicesMenu: [{
                displayText: 'weddings',
                link: 'weddings',
            }, {
                displayText: 'real estate',
                link: 'real-estate',
                }, {
                    displayText: 'corporate',
                    link: 'corporate',
            }],
            tabs: [{
                displayText: 'HOME',
                link: '/home',
            },{
                displayText: 'ABOUT',
                link: '/about',
            }, {
                displayText: 'GALLERY',
                link: '/gallery',
            }, {
                displayText: 'SERVICES',
                link: '/services',
            }, {
                displayText: 'CONTACT',
                link: '/contact',
            }]
        };
    }

    render() {
        return (
            <header>
                <div className="header-wrapper">
                    <ul className="tabs">
                        {this.state.tabs.map((tab, index) =>
                            <li className="tab"
                                key={index}>
                                <Link to={tab.link}>{tab.displayText}</Link>
                            </li>
                        )}
                    </ul>
                </div>
            </header>
        );
    }
}

export default connect((state: any) => { return {}; })(Header);
