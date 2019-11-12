import React from 'react';
import { TitleText, ContentText, FinePrint } from '../shared/Helpers';
import PreapproveButton from '../shared/PreapproveButton';

import phone_cart from '../../assets/images/phone_cart.png';

const Benefits = ({ styles }) => {
    const BenefitsStyle = {
        padding: '10px',
        marginTop: '30px',
        display: 'flex',
        flexDirection: 'column',
        alignItems: styles.isMobile ? 'flex-start' : 'center'
    };

    const titleShift = {
        textAlign: styles.isMobile ? 'left' : 'center'
    };
    
    const benefit = {
        textAlign: 'left',
        marginBottom: 0
    };

    const benefitsWeb = {
        width: '70vw',
        minHeight: '500px',
        marginBottom: '100px',
        display: 'inline-flex',
    };

    const leftContainer = {
        minHeight: '500px',
        padding: '60px'
    };
    
    const rightContainer = {
        minHeight: '500px',
        width: '22vw',
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'center',
        alignItems: 'flex-start',
        padding: '50px 0'
    };

    const webBenefitsContainer = {
        display: 'flex',
        flexDirection: 'column',
    };

    const webButton = {
        // justifyContent: 'flex-start'
    };

    return (
        <div style={BenefitsStyle}>
            <div className='benefit-title' style={titleShift}>
                <TitleText text='Finance On Your Terms, With Flexible Payment Options' />
                <ContentText text={'With an initial payment of just $50, you can afford to shop from all the top brand names. Don\'t wait, find out how much you qualify for right now!'} />
            </div>
            {styles.isMobile ? (
                <div>
                    <div className='benefit' style={benefit}>
                        <TitleText text='SIMPLICITY' />
                        <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
                    </div>
                    <div className='benefit' style={benefit}>
                        <TitleText text='AFFORDABILITY' />
                        <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
                    </div>
                    <div className='benefit' style={benefit}>
                        <TitleText text='FLEXIBILITY' />
                        <ContentText text={'Payoff over 12 months and get a flexible payment schedule timed to your payroll dates.'} />
                    </div>
                    <img src={phone_cart} alt='shopping-cart-img' />
                    <FinePrint text={'*This estimated payment is only an estimate. Not all applicants are approved or qualify for these terms. Actual terms will be in the lease agreement. Not available in MN, NJ, WI & WY.'} />
                </div>
                ) : (
                <div style={webBenefitsContainer}>
                    <div style={benefitsWeb}>
                        <div style={leftContainer} >
                            <img src={phone_cart} alt='shopping-cart-img' style={{height: '100%'}} />
                        </div>
                        <div style={rightContainer} >
                            <div className='benefit' style={benefit}>
                                <TitleText text='SIMPLICITY' />
                                <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
                            </div>
                            <div className='benefit' style={benefit}>
                                <TitleText text='AFFORDABILITY' />
                                <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
                            </div>
                            <div className='benefit' style={benefit}>
                                <TitleText text='FLEXIBILITY' />
                                <ContentText text={'Payoff over 12 months and get a flexible payment schedule timed to your payroll dates.'} />
                            </div>
                            <PreapproveButton styles={styles} style={webButton} isOffset={true} />  
                        </div>
                    </div>
                    <FinePrint text={'*This estimated payment is only an estimate. Not all applicants are approved or qualify for these terms. Actual terms will be in the lease agreement. Not available in MN, NJ, WI & WY.'} />
                </div>
            )}
                        
        </div>
    )
}

export default Benefits;