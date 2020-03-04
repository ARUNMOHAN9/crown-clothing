import React from 'react';

const CustomButton = ({trigger, classes, ...restProps}) => {
    return (
        <button className={`btn ${classes}`} onClick={trigger} {...restProps}>
            {restProps.children}
        </button>
    );
}

export default CustomButton;