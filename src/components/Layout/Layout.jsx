import React from 'react';

export const Layout = (props) => {
    return (
        <div className="layout-wrapper">
            <div className="layout-container">{props.children}</div>
        </div>
    );
};
