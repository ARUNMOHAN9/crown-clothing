import React from 'react';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

const CollectionItem = ({ name, price, imageUrl }) => {
    return (
       <div className="collection-item">
           <div className="image"
           style={{backgroundImage: `url(${imageUrl})`}}>
               <CustomButton classes="primary-btn">Add to cart</CustomButton>
           </div>
           <div className="collection-footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
           </div>
       </div>
    );
}

export default CollectionItem;