import React from 'react';

import ReactSVG from 'react-svg';

export const ImageSlider = ({ title, src, styles }) => {
    const brandContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.75rem'
    };

    return (
        <div className={`brand-icon ${title}`} style={brandContainer}>
            <ReactSVG
                src={src}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
            />
            {!styles.isMobile ? (<span>{title}</span>) : (null)}
        </div>
    );
};

export const Arrow = ({ direction, clickFunction, src }) => (
    <div
        className={`slide-arrow ${direction}`}
        onClick={clickFunction}>
        <img
            src={src}
            alt={`arrow ${direction}`}
        />
    </div>
);

export const MobileBrandChildren = ({ styles, currentImageIndex, brands }) => {
    let children = [];

    brands.map((brand, i) => {        
        // current item is within +- 1 of current index
        if (
            (i + 1) === (currentImageIndex + 1) ||
            (i + 1) === (currentImageIndex) ||
            (i + 1) === (currentImageIndex - 1)
            ) {
            children.push(<ImageSlider key={i} title={brand.text} src={brand.icon} styles={styles} />);
                return(null);
        } else {
            return(null)
        };
    });
    return children;
};

export const TitleText = ({ text, isMobile, isOffset = false, styles }) => (
    <div style={{
        fontSize: styles.isMobile || isMobile || isOffset ? '1.3rem' : '2rem',
        fontWeight: 600,
        lineHeight: '1.25',
        marginBottom: '10px',
        maxWidth: isMobile ? '550px' : '750px',
    }}>
        {text}
    </div>
);

export const ContentText = ({ text, isOffset = false }) => (
    <div style={{
        fontSize: isOffset ? '0.8rem' : '1rem',
        fontWeight: 400,
        marginBottom: isOffset ? '15px' : '60px',
        lineHeight: isOffset ? '1.75' : '1.5',
        paddingLeft: '15px',
        paddingRight: '15px',
        maxWidth: '750px'
    }}>
        {text}
    </div>
);

export const FinePrint = ({ text }) => (
    <div style={{
        textAlign: 'center',
        fontSize: '0.8rem',
        marginBottom: '50px'
    }}>
        {text}
    </div>
)