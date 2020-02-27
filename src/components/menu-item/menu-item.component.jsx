import React from 'react';

import './menu-item.styles.scss';

const MenuItem = (props) => (
    <div className='menuItem'>
        <div className='content'>
            <h1 className='title'>{props.title}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
)

export default MenuItem;