import React from 'react';
import {connect} from 'react-redux';

import './loader.styles.scss';

const Loader = ({ isLoading }) => {
    return (
        isLoading ? (<div className="loader-wrapper">
            <div className="loader">Loading...</div>
        </div>) : null
    );
}

const mapStateToProps = ({loader : {isLoading}}) => ({
    isLoading
})

export default connect(mapStateToProps, null)(Loader);