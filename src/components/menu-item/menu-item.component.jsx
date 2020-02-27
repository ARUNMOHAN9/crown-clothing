import React from 'react';

import './menu-item.styles.scss';

const MenuItem = ({size, imgUrl, title}) => (
    <div className='menuItem'>
        <div className={`${size} bg-image`}  style={{backgroundImage: `url(${imgUrl})`}}></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
)

export default MenuItem;