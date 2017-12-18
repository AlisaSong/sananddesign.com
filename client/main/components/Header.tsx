import { connect } from 'react-redux';
import * as React from 'react';
import { Link } from 'react-router-dom';

import '../styles/header.css';

const logoTransparent = require('../images/logo-transparent.png');

interface HeaderProps {
}

class Header extends React.Component<HeaderProps, any> {
    constructor(props: HeaderProps) {
        super(props);

        this.state = {
            isDropdownMenuVisible: false,
            isMenuExpanded: false,
            tabs: [{
                displayText: 'HOME',
                link: '/home'
            }, {
                displayText: 'ABOUT',
                link: '/about'
            }, {
                    displayText: 'GALLERY',
                    dropdownMenu: [{
                        displayText: 'gallery 1',
                        link: '/galleries/gallery1'
                    }, {
                        displayText: 'gallery 2',
                        link: '/galleries/gallery2'
                        }, {
                            displayText: 'gallery 3',
                            link: '/galleries/gallery3'
                    }, {
                        displayText: 'gallery 4',
                        link: '/galleries/gallery4'
                        }, {
                            displayText: 'gallery 5',
                            link: '/galleries/gallery5'
                    }],
                link: '/gallery'
            }, {
                displayText: 'SERVICES',
                dropdownMenu: [{
                    displayText: 'weddings',
                    link: '/services/weddings'
                }, {
                    displayText: 'real estate',
                    link: '/services/real-estate'
                }, {
                    displayText: 'corporate',
                    link: '/services/corporate'
                }],
                isExpanded: false,
                link: '/services/weddings'
            }, {
                displayText: 'CONTACT',
                link: '/contact'
            }]
        };
    }

    getToggle(isExpanded: boolean): string {
        return isExpanded ? ' -' : '+';
    }

    onClickMenu(): void {
        this.setState({
            isMenuExpanded: !this.state.isMenuExpanded
        });
    }

    onClickTab(index: number): void {
        let tabs = this.state.tabs;
        tabs[index].isExpanded = !tabs[index].isExpanded;
        this.setState({
            tabs: tabs
        });
    }

    render() {
        return (
            <header>
                <div className="header-logo">
                    <img className="logo-transparent" src={logoTransparent} />
                </div>
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
                <div className="menu" onClick={() => { this.onClickMenu() }}>
                    <span>MENU</span>
                    <span>{this.getToggle(this.state.isMenuExpanded)}</span>
                </div>
                {this.state.isMenuExpanded && <ul className="tabs-small">
                    {this.state.tabs.map((tab, index) =>
                        <li className="tab-small"
                            key={index}>
                            {tab.dropdownMenu && <div>
                                <div onClick={() => { this.onClickTab(index) }}>
                                    <span>{tab.displayText}</span>
                                    <span>{this.getToggle(tab.isExpanded)}</span>
                                </div>
                                {tab.isExpanded && tab.dropdownMenu.map((option, i) =>
                                    <Link key={i} to={option.link}>{option.displayText}</Link>
                                )}
                            </div>}
                            {!tab.dropdownMenu && <Link to={tab.link}>{tab.displayText}</Link>}
                        </li>
                    )}
                </ul>}
            </header>
        );
    }
}

export default connect((state: any) => { return {}; })(Header);
