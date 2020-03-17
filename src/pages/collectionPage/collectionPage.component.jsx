import React from 'react';
import { connect } from 'react-redux';

import './collectionPage.styles.scss';

import CollectionItem from '../../components/collection-item/collection-item.component';
import CollectionItemEnum from './collection-item.enum';

const CollectionPage = ({ match, collections }) => {
    const { title } = collections[CollectionItemEnum[match.params.collectionId]];
    const categoryId = collections[CollectionItemEnum[match.params.collectionId]];
    return (
        <div className='collection-page'>
            <h2 className='title'>{title}</h2>
            <div className='items'>
                {collections[CollectionItemEnum[match.params.collectionId]].items
                    .map(item => <CollectionItem key={item.id} item={item} categoryId={categoryId} />)}
            </div>
        </div >
    )
};

const mapStateToProps = ({ shop: { collections } }) => ({
    collections
});
export default connect(mapStateToProps)(CollectionPage);