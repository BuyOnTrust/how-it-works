import React from 'react';
import ReactSVG from 'react-svg';

import phone_icon from '../../assets/icons/phone.svg';

const Phone = ({styles}) => {
    const phoneStyle = {
        ...styles,
        fontWeight: "300",
        fontSize: "0.85rem",
    };

    return (
        <div style={phoneStyle}>            
            <ReactSVG 
                src={phone_icon} 
                beforeInjection={svg => {
                    svg.classList.add('svg-icon')
                    svg.setAttribute('style', 'width: 25px')
                }}
                fallback={() => <span>Error!</span>}
                loading={() => <span>Loading</span>}
                wrapper="span"
                className="svg-icon-wrapper"
            />
            888-274-7732                        
        </div>
    )
}

export default Phone;