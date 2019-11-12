import React from 'react';

import ReactSVG from 'react-svg';

export const ImageSlider = ({ title, src, styles }) => {
    const brandContainer = {
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: '0.5rem'
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
        <ReactSVG
            src={src}
            fallback={() => <span>Error!</span>}
            loading={() => <span>Loading</span>}
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

export const TitleText = ({ text, isOffset }) => (
    <div style={{
        fontSize: isOffset ? '1.2rem' : '1.5rem',
        fontWeight: 600,
        lineHeight: '1.25',
        marginBottom: '10px',
        maxWidth: '550px'
    }}>
        {text}
    </div>
);

export const ContentText = ({ text, isOffset = false }) => (
    <div style={{
        fontSize: isOffset ? '0.75rem' : '0.9rem',
        fontWeight: 300,
        marginBottom: isOffset ? '15px' : '60px',
        lineHeight: '1.25',
        paddingLeft: '15px',
        paddingRight: '15px',
        maxWidth: '600px'
    }}>
        {text}
    </div>
);

export const FinePrint = ({ text }) => (
    <div style={{
        fontSize: '0.5rem',
        marginBottom: '50px'
    }}>
        {text}
    </div>
)