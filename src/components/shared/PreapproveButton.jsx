import React from 'react';

const PreapproveButton = ({ styles, isOffset = false }) => {
    const buttonContainerStyle = {
        display: 'flex',
        justifyContent: isOffset ? 'flex-start' : 'center',
        alignItems: 'center',
        minWidth: isOffset ? '22vw' : '100vw',
        fontWeight: 'bold',
        padding: '25px',
        boxSizing: 'border-box'
    };

    const buttonStyle = {
        width: styles.approvalButtonWidth,
        height: styles.approvalButtonHeight,
        backgroundColor: 'rgb(35, 160, 221)',
        borderRadius: 50,
        textTransform: 'uppercase',
        color: styles.white(),
        fontSize: '0.8rem',
        fontWeight: 700
    }

    const handleClick = () => {
        if (typeof showOptinModal === 'function') {
            window.showOptinModal();
        } else {
            console.log('PreApproval button clicked!...but showOptinModal() is not within scope.')
        }
    }

    return (
        <div style={buttonContainerStyle}>
            <button style={buttonStyle} onClick={handleClick}>Click here to get pre-qualified</button>
        </div>
    )
}

export default PreapproveButton;