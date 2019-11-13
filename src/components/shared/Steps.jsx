import React from 'react';

import step1mobile from '../../assets/steps/step_1-mobile.svg';
import step2mobile from '../../assets/steps/step_2-mobile.svg';
import step3mobile from '../../assets/steps/step_3-mobile.svg';
import step4mobile from '../../assets/steps/step_4-mobile.svg';
import step1web from '../../assets/steps/1.png';
import step2web from '../../assets/steps/2.png';
import step3web from '../../assets/steps/3.png';
import step4web from '../../assets/steps/4.png';

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
            <img src={step.src} alt='step-img' />
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
        width: styles.isMobile ? '90vw' : '900px',
        justifyContent: 'center',
    };

    const webSteps = {
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'center',
        width: '100%',
        maxWidth: styles.isMobile ? '460px' : '1000px'
    };

    const webStep = {
        margin: '10px',
        position: 'relative'
    };

    return ( styles.isMobile ? 
        <div style={mobileSteps}>
            <MakeMobileSteps />
        </div>        
     : 
        <div style={webSteps}>
            <div style={row}>
                <div style={webStep}>                                   
                    <img src={step1web} style={{ maxWidth: '45vw' }} alt='step-img' />
                </div> 
                <div style={webStep}>
                    <img src={step2web} style={{ maxWidth: '45vw' }} alt='step-img' />
                </div> 
            </div>
            <div style={row} >
                <div style={webStep}>
                    <img src={step3web} style={{ maxWidth: '45vw' }} alt='step-img' />
                </div> 
                <div style={webStep}>
                    <img src={step4web} style={{ maxWidth: '45vw' }} alt='step-img' />
                </div> 
            </div>
        </div>        
    )
}

export default Steps;