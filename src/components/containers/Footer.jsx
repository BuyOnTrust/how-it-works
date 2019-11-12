import React from 'react';

// import ReactSVG from 'react-svg';

// import BOT_logo from '../../assets/logos/BOT_logo.svg';

const Footer = ({ styles }) => {
    const footerStyle = {
        position: "relative",
        bottom: 0,
        // display: "inline-flex",
        // justifyContent: styles.showHeaderPhone ? "space-between" : "center",
        // alignItems: "center",
        width: 'calc(100vw - 40px)',
        height: styles.footerHeight,
        backgroundColor: 'rgb(0,37,52)',
        color: styles.white(),
        padding: "0px 20px"
    };

    return (
        <div style={footerStyle}>
            Footer
        </div>
    )
}

export default Footer;