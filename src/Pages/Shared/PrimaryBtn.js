import React from 'react';

const PrimaryBtn = ({ children }) => {
    return (
        <button class="btn btn-primary bg-gradient-to-r from-secondary to-primary">{children}</button>
    );
};

export default PrimaryBtn;