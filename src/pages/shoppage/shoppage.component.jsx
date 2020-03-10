import React, { Component } from 'react';

import SHOP_DATA from '../../config-files/shop.data';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

class ShopPage extends Component {
    state = {
        collections: SHOP_DATA
    }

    render() {
        return (
            this.state.collections.map(
                ({ id, ...otherCollectionProps }) => <PreviewCollection key={id} categoryId={id}{...otherCollectionProps} />
            )
        )
    }
}

export default ShopPage;