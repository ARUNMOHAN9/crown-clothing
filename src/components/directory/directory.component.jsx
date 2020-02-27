import React from 'react';

import MenuItem from '../menu-item/menu-item.component';

import './directory.styles.scss';

const Directory = () => (
    <div className='directoryMenu'>
        <MenuItem title={'HATS'} />
        <MenuItem title={'JACKETS'} />
        <MenuItem title={'SNEAKERS'} />
        <MenuItem title={'WOMEN'} />
        <MenuItem title={'MEN'} />
    </div>
)

export default Directory;