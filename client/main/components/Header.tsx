import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/index.css';
import '../styles/header.css';

interface HeaderProps {
}

class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isDropdownMenuVisible: false,
            sites: [{
                icon: 'instagram',
                link: 'https://www.instagram.com/san_and_design'
            }, {
                icon: 'linkedin',
                link: 'https://www.linkedin.com/in/alisa-song-5545b14b/'
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
                displayText: 'APPROACH',
                link: '/approach',
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
            <section>
                <div className="header-wrapper">
                    <ul className="tabs">
                        {this.state.tabs.map((tab, index) =>
                            <li className="tab"
                                key={index}>
                                <Link to={tab.link}>{tab.displayText}</Link>
                            </li>
                        )}
                        {this.state.sites.map((site, index) =>
                            <li className="tab"
                                key={index}
                                onClick={() => { window.open(site.link, '_blank') }}>
                            </li>
                        )}
                    </ul>
                </div>
            </section>
        );
    }
}

export default connect((state: any) => { return {}; })(Header);
