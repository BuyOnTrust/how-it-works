import React from 'react';
import ReactSVG from 'react-svg';

import phone_icon from '../../assets/icons/phone.svg';

const Phone = () => {
    const phoneStyle = {
        fontWeight: "300",
        fontSize: "0.85rem",
    };

    return (
        <div style={phoneStyle}>            
            <ReactSVG 
                src={phone_icon} 

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