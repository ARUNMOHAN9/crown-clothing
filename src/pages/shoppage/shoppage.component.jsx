import React from 'react';
import { connect } from 'react-redux';

import PreviewCollection from '../../components/preview-collection/preview-collection.component';

const ShopPage = ({collections}) => {

    return (
        collections.map(
            ({ id, ...otherCollectionProps }) => <PreviewCollection key={id} categoryId={id}{...otherCollectionProps} />
        )
    )
}

const mapStateToProps = ({shop: {collections}}) => ({
    collections
});
export default connect(mapStateToProps)(ShopPage);