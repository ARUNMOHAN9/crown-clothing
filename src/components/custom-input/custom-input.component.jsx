import React, { useState } from 'react';

import './custom-input.styles.scss'

const CustomInput = ({ label, trigger, ...otherProps }) => {
    const [valueLength, changeValue] = useState(0);
    return (
        <div className="group">
            <input className="form-input" onChange={(e) => {changeValue(e.target.value.length)}} {...otherProps} />
            {
                label ? 
                <label className={`${valueLength ? 'shrink' : ''} form-input-label`}>{label}</label> : null
            }
        </div>
    );
}

export default CustomInput;