import React from 'react';
import { withRouter } from 'react-router-dom';

import './menu-item.styles.scss';

const MenuItem = ({ title, imgUrl, size, history, linkUrl, match }) => (
    <div className='menuItem' onClick={() => history.push(`${match.url}${linkUrl}`)}>
        <div className={`${size} bg-image`} style={{ backgroundImage: `url(${imgUrl})` }}></div>
        <div className='content'>
            <h1 className='title'>{title}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>
)

export default withRouter(MenuItem);