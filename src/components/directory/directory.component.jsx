import React from 'react';
import './directory.styles.scss';

import sections from '../../config-files/directory.data';

import MenuItem from '../menu-item/menu-item.component';

const Directory = () => (

    <div className='directoryMenu'>
        {sections.map(({title, id, imageUrl, size}) => <MenuItem key={id} title={title} imgUrl={imageUrl} size={size}/>)}
    </div>
)

export default Directory;