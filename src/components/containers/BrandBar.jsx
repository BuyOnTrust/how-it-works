import React from 'react';

// import ReactSVG from 'react-svg';

const BrandBar = ({ styles }) => {
    const BrandBarStyle = {
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        height: "100px",
        backgroundColor: "rgb(0,37,52)",
        color: styles.white()
    };

    const brandbarTitle = {
        textTransform: "uppercase",
    };

    return (
        <div style={BrandBarStyle}>
            <span style={brandbarTitle}>Get all of the top brands</span>
            <div>
                Brand Carousel
            </div>
        </div>
    )
}

export default BrandBar;