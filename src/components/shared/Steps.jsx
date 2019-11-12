import React from 'react';
import ReactSVG from 'react-svg';

import step1mobile from '../../assets/steps/step_1-mobile.svg';
import step2mobile from '../../assets/steps/step_2-mobile.svg';
import step3mobile from '../../assets/steps/step_3-mobile.svg';
import step4mobile from '../../assets/steps/step_4-mobile.svg';
import step1web from '../../assets/steps/step_1-web.svg';
import step2web from '../../assets/steps/step_2-web.svg';
import step3web from '../../assets/steps/step_3-web.svg';
import step4web from '../../assets/steps/step_4-web.svg';

const stepsArray = [
    {src: step1mobile},
    {src: step2mobile},
    {src: step3mobile},
    {src: step4mobile},
]

const MakeMobileSteps = () => {
    let stepElements = [];
    stepsArray.map((step, i) => {
        stepElements.push(
            <ReactSVG 
                key={i}
                src={step.src}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                className="svg-step-wrapper"
            />
        )
        return(null)
    })
    return stepElements;
}

const Steps = ({ styles }) => {
    const mobileSteps = {
        display: 'flex', 
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center'
    };

    const row = {        
        display: 'flex',
        justifyContent: 'space-around',
        maxWidth: '90vw'
    };

    const webSteps = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        maxWidth: '90vw'
    };

    const webStep = {
        height: 345,
        width: 740,
        margin: '10px'
    };

    return ( styles.isMobile ? 
        <div style={mobileSteps}>
            <MakeMobileSteps />
        </div>        
     : 
        <div style={webSteps}>
            <div style={row}>
                <div style={webStep}>
                    <img src={step1web} alt='howto-web-img' style={{ maxWidth: '738px' }} />
                </div> 
                <div style={webStep}>
                    <img src={step2web} alt='howto-web-img' style={{ maxWidth: '738px' }} />
                </div> 
            </div>
            <div style={row} >
                <div style={webStep}>
                    <img src={step3web} alt='howto-web-img' style={{ maxWidth: '738px' }} />
                </div> 
                <div style={webStep}>
                    <img src={step4web} alt='howto-web-img' style={{ maxWidth: '738px' }} />
                </div> 
            </div>
        </div>        
    )
}

export default Steps;