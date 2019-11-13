import React from 'react';
import ReactSVG from 'react-svg';

import phone_icon from '../../assets/icons/phone.svg';

const HeroPhone = ({ styles }) => {
    const phoneStyle = {        
        fontWeight: '300',
        fontSize: '0.85rem',
        display: 'inline-flex',
        marginBottom: '20px'
    };

    return (
        <div style={phoneStyle}>
            <ReactSVG
                src={phone_icon}
                beforeInjection={svg => {
                    svg.classList.add('svg-icon')
                    svg.setAttribute('style', 'display: flex')
                    svg.setAttribute('style', 'flex: 1')
                }}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                wrapper='span'
                className='svg-icon-wrapper'
            />
            <span style={{display: 'flex', flex: 1, marginLeft: '10px'}}>
                Questions? Call us! 888-274-7732
            </span>
        </div>
    )
}

export default HeroPhone;