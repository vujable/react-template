import React from 'react';

export const Page = (props) => {
    return (
        <div className="page-wrapper">
            <div className="page-container">{props.children}</div>
        </div>
    );
};
