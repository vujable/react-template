import React from 'react';

export const Nav = (props) => {
    return (
        <div className="nav-wrapper">
            <div className="nav-container">{props.children}</div>
        </div>
    );
};

export const NavLinks = (props) => {
    return <div className="nav-links">{props.children}</div>;
};

export const NavLogo = (props) => {
    return <div className="nav-logo">{props.children}</div>;
};
