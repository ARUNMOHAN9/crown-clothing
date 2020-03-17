import React from 'react';
import { connect } from 'react-redux';

import './collection-overview.styles.scss';

import PreviewCollection from '../preview-collection/preview-collection.component';

const CollectionOverview = ({ collections }) => (
    <div className='collections-overview'>
        {collections.map(
            ({ id, ...otherCollectionProps }) => <PreviewCollection key={id} categoryId={id}{...otherCollectionProps} />
        )}
    </div>
)


const mapStateToProps = ({ shop: { collections } }) => ({
    collections
});

export default connect(mapStateToProps)(CollectionOverview);