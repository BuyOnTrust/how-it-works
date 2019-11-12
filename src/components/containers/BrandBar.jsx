import React from 'react';

import Carousel from '../shared/Carousel';

const BrandBar = ({ styles }) => {
    const BrandBarStyle = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        minWidth: '100vw',
        height: 'auto',
        backgroundColor: 'rgb(0,37,52)',
        color: styles.white()
    };

    const brandbarTitle = {
        textTransform: 'uppercase',
        padding: '10px 0'
    };

    return (
        <div style={BrandBarStyle}>
            <span style={brandbarTitle}>Get all of the top brands</span>
            <Carousel styles={styles} />
        </div>
    )
}

export default BrandBar;