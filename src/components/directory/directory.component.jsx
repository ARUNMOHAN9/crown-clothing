import React from 'react';
import {connect} from 'react-redux';

import './directory.styles.scss';

import MenuItem from '../menu-item/menu-item.component';

const Directory = ({sections}) => (

    <div className='directoryMenu'>
        {sections.map(({title, id, imageUrl, size, linkUrl}) => <MenuItem key={id} linkUrl={linkUrl} title={title} imgUrl={imageUrl} size={size}/>)}
    </div>
)

const mapStateToProps = ({directory: {sections}}) => ({
    sections
});

export default connect(mapStateToProps)(Directory);