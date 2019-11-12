import React from 'react';
import ReactSVG from 'react-svg';

import step1mobile from '../../assets/steps/step_1-mobile.svg';
import step2mobile from '../../assets/steps/step_2-mobile.svg';
import step3mobile from '../../assets/steps/step_3-mobile.svg';
import step4mobile from '../../assets/steps/step_4-mobile.svg';

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

    return ( styles.isMobile ? 
        <MakeMobileSteps />
     : 
        <div>
            WebSteps
        </div>        
    )
}

export default Steps;