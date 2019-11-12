import React from 'react';
import { TitleText, ContentText, FinePrint } from '../shared/Helpers';
import PreapproveButton from '../shared/PreapproveButton';

import phone_cart from '../../assets/images/phone_cart.png';

const Benefits = ({ styles }) => {
    const BenefitsStyle = {
        padding: '10px',
        marginTop: '30px'
    };

    const shoppingCartImg = {

    };

    return (
        <div style={BenefitsStyle}>
            <TitleText text='Finance On Your Term With Flexible Payment Options' />
            <ContentText text={'With an initial payment of just $50, you can afford to shop from all the top brand names. Don\'t wait, find out how much you qualify for right now!'} />
            <TitleText text='SIMPLICITY' />
            <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
            <TitleText text='AFFORDABILITY' />
            <ContentText text={'Payoff within 90 days and you can simply close your account for the amount financed + $10.'} />
            <TitleText text='FLEXIBILITY' />
            <ContentText text={'Payoff over 12 months and get a flexible payment schedule timed to your payroll dates.'} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
            <div style={{ marginTop: '10px', marginBottom: '10px' }}>
                <PreapproveButton styles={styles} />
            </div>
            <img src={phone_cart} alt='shopping-cart-img' style={shoppingCartImg} />
            <FinePrint text={'*This estimated payment is only an estimate. Not all applicants are approved or qualify for these terms. Actual terms will be in the lease agreement. Not available in MN, NJ, WI & WY.'} />
            </div>
        </div>
    )
}

export default Benefits;