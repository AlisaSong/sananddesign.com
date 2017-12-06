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
            tabs: [{
                displayText: 'HOME',
                link: '/home',
            }, {
                displayText: 'ABOUT',
                link: '/about',
            }, {
                displayText: 'GALLERY',
                link: '/gallery',
            }, {
                displayText: 'SERVICES',
                dropdownMenu: [{
                    displayText: 'weddings',
                    link: '/services/weddings',
                }, {
                    displayText: 'real estate',
                    link: '/services/real-estate',
                }, {
                    displayText: 'corporate',
                    link: '/services/corporate',
                }],
                link: '/services/weddings',
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
                                {tab.dropdownMenu && <div className="dropdown-menu">
                                    {tab.dropdownMenu.map((option, i) =>
                                        <Link key={i} to={option.link}>{option.displayText}</Link>
                                    )}
                                </div>}
                            </li>
                        )}
                    </ul>
                </div>
            </header>
        );
    }
}

export default connect((state: any) => { return {}; })(Header);
