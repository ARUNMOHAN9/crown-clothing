import React from 'react';
import {connect} from 'react-redux';

import './collection-item.styles.scss';

import CustomButton from '../custom-button/custom-button.component';

import {addItemToCart} from '../../redux/cart/cart.actions';

const CollectionItem = (props) => {
    const {name, price, imageUrl} = props.item;
    const addItemToCart = props.addItemToCart;
    const categoryId = props.categoryId;
    const item = props.item;
    return (
       <div className="collection-item">
           <div className="image"
           style={{backgroundImage: `url(${imageUrl})`}}>
               <CustomButton classes="primary-btn" onClick={() => addItemToCart({id: categoryId, item: item})}>Add to cart</CustomButton>
           </div>
           <div className="collection-footer">
               <span className="name">{name}</span>
               <span className="price">{price}</span>
           </div>
       </div>
    );
}

const mapDispatchToProps = (dispatch) => ({
    addItemToCart: (payload) => dispatch(addItemToCart(payload))
})

export default connect(null, mapDispatchToProps)(CollectionItem);