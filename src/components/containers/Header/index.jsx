import React from 'react';
import Phone from '../../shared/Phone';
import ReactSVG from 'react-svg';

import BOT_logo from '../../../assets/logos/BOT_logo.svg';

const Header = ({styles}) => {
    const topBarStyle = {
        position: "fixed",
        top: 0,
        display: "flex",
        justifyContent: styles.showHeaderPhone ? "space-between" : "center",
        alignItems: "center",
        width: "100%",
        height: styles.topBarHeight,
        maxWidth: "100vw",
        backgroundColor: styles.white(),
        borderBottom: `1px solid ${styles.black(0.1)}`,
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box"
    };

    return (
        <div style={topBarStyle}>
            <ReactSVG
                src={BOT_logo}
                beforeInjection={svg => {
                    svg.classList.add('svg-icon')
                    svg.setAttribute('style', 'width: 120px')
                }}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
            />
            {styles.showHeaderPhone ? (<Phone styles={styles} />) : ('')}
        </div>
    )
}

export default Header;