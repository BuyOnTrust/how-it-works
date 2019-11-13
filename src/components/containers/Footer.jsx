import React from 'react';

import ReactSVG from 'react-svg';

import bw_BOT_logo from '../../assets/logos/bw_BOT_logo.svg';

const Footer = ({ styles }) => {
    const footerStyle = {
        position: "relative",
        bottom: 0,
        width: 'calc(100vw - 40px)',
        height: styles.footerHeight,
        backgroundColor: 'rgb(0,37,52)',
        color: styles.white(),
        padding: "0px 20px",
        display: 'flex'
    };

    const flexContainer = {
        margin: '10px',
        width: '50%',
        padding: '30px'
    };

    const footerLeft = {
        display: 'flex',
        flex: 1
    };

    const footerRight = {
        display: 'flex',
        flex: 1.5,
        justifyContent: 'space-around',
        paddingRight: '100px'
    };

    const footerRightChildText = {
        fontSize: '0.4rem', 
        margin: '0 0 10px 0'
    };

    const footerRightChildTitle = {
        fontSize: '0.8rem',
        fontWeight: 600
    };

    const footerLeftChild = {        
        marginLeft: '30px',
        fontSize: '0.5rem'
    };

    return (
        <div style={footerStyle}>
            <div style={{...flexContainer, ...footerLeft}} >
                <div style={footerLeftChild} >
                    <ReactSVG
                        src={bw_BOT_logo}                        
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                    />
                    <span>
                        &#9400; 2019 Buy On Trust
                    </span>
                </div>
            </div>
            <div style={{...flexContainer, ...footerRight}} >
                <div>
                    <span style={footerRightChildTitle}>Contact Us</span>
                    <p style={footerRightChildText}>
                        1434 Spruce St, Suite 100 <br />
                        Boulder, CO 80302 <br />
                        (888)274-7732
                    </p>
                </div>
                <div>
                    <span style={footerRightChildTitle}>Accounts & Orders</span>
                    <p style={footerRightChildText}>
                        Wishlist <br />
                        Login or Sign Up <br />
                        Shipping & Returns
                    </p>
                </div>
                <div>
                    <span style={footerRightChildTitle}>Quick Links</span>
                    <p style={footerRightChildText}>
                        How it Works <br />
                        Privacy Policy <br />
                        Terms of Service
                    </p>
                </div>
            </div>
        </div>
    )
}

export default Footer;