import React from 'react';
import Steps from '../shared/Steps';
import { TitleText, ContentText } from '../shared/Helpers';
import PreapproveButton from '../shared/PreapproveButton';

const HowTo = ({ styles }) => {
    const howToStyle = {
        padding: '10px'
    };

    return (
        <div style={howToStyle}>
            <TitleText text='Wondering how this whole thing works?' />
            <ContentText text={'With an initial payment of just $50, you can afford to shop from all the top brand names. Don\'t wait, find out how much you qualify for right now!'} />
            <div style={{
                display: 'flex',
                flexDirection: 'column',
                justifyContent: 'center',
                alignItems: 'center'
            }}>
                <Steps styles={styles} />
                <div style={{
                    marginTop: '10px',
                    marginBottom: '10px'
                }}>
                    <PreapproveButton styles={styles} />
                </div>
            </div>
        </div>
    )
}

export default HowTo;