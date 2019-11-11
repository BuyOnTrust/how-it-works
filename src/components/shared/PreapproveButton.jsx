import React from 'react';

const PreapproveButton = ({ styles }) => {
    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        width: styles.approvalButtonWidth,
        height: styles.approvalButtonHeight,
        // backgroundColor: styles.white(),
        fontWeight: "bold",
        padding: "0px 20px",
        boxSizing: "border-box"
    };

    return (
        <div style={buttonContainerStyle}>
            <button>Im a button</button>
        </div>
    )
}

export default PreapproveButton;