import React from 'react';
import Phone from '../shared/Phone';
import ReactSVG from 'react-svg';

import BOT_logo from '../../assets/logos/BOT_logo.svg';

const Header = ({styles}) => {
    const topBarStyle = {
        position: "fixed",
        top: 0,
        display: "inline-flex",
        justifyContent: styles.showHeaderPhone ? "space-between" : "center",
        alignItems: "center",
        width: 'calc(100vw - 40px)',
        height: styles.topBarHeight,
        backgroundColor: styles.white(),
        padding: "0px 20px",
        zIndex: '1000'
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
            {styles.showHeaderPhone ? (<Phone />) : ('')}
        </div>
    )
}

export default Header;