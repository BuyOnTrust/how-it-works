import React from 'react';
import ReactSVG from 'react-svg';

import step1mobile from '../../assets/steps/step_1-mobile.svg';
import step2mobile from '../../assets/steps/step_2-mobile.svg';
import step3mobile from '../../assets/steps/step_3-mobile.svg';
import step4mobile from '../../assets/steps/step_4-mobile.svg';
import step1web from '../../assets/steps/1.svg';
import step2web from '../../assets/steps/2.svg';
import step3web from '../../assets/steps/3.svg';
import step4web from '../../assets/steps/4.svg';

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
                    <ReactSVG                        
                        src={step1web}
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                        className="svg-step-wrapper"                        
                    />                    
                </div> 
                <div style={webStep}>
                    <ReactSVG
                        src={step2web}
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                        className="svg-step-wrapper"
                    />                     
                </div> 
            </div>
            <div style={row} >
                <div style={webStep}>
                    <ReactSVG
                        src={step3web}
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                        className="svg-step-wrapper"
                    />                     
                </div> 
                <div style={webStep}>
                    <ReactSVG
                        src={step4web}
                        fallback={() => <span>Error!</span>}
                        loading={() => <span>Loading</span>}
                        className="svg-step-wrapper"
                    /> 
                </div> 
            </div>
        </div>        
    )
}

export default Steps;