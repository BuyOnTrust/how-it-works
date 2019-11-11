import React from 'react';

import ReactSVG from 'react-svg';
import PreapproveButton from '../shared/PreapproveButton';
import HeroPhone from '../shared/HeroPhone';

import down_carrot from '../../assets/icons/down_carrot.svg';
import BB_logo from '../../assets/logos/BB_logo.svg';
import hero_img from '../../assets/images/hero_img.png';

const Hero = ({ styles }) => {
    const heroStyle = {        
        marginTop: styles.topBarHeight,
        padding: "0 20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center"
    };

    const topText = {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1.2rem",
        padding: "10px 0"
    };

    const lowerText = {
        textAlign: "center",
        fontWeight: "600",
        fontSize: "1.4rem",
        textTransform: "uppercase",
        marginTop: "10px",
        marginBottom:"-10px"
    };

    const heroImg = {
        width: '90vw',
        padding: '20px 0'
    };

    return (
        <div style={heroStyle}>
            <div style={topText} >
                <span>
                    Get Approved for Up to $5,000 in 
                <br />
                    Brand Name Electronics From
                </span>
            </div>
            <ReactSVG
                src={BB_logo}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                className="bb-logo-wrapper"
            />
            <div style={lowerText}>
                No credit needed!
            </div>
            <ReactSVG
                src={down_carrot}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                className="down-carrot-wrapper"
            />
            <PreapproveButton styles={styles} />
            {styles.showHeroPhone ? (<HeroPhone />) : ('')}
            <img src={hero_img} alt='hero-collage' style={heroImg} />
        </div>
    )
}

export default Hero;