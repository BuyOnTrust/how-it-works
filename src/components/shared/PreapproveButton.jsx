import React from 'react';

const PreapproveButton = ({ styles }) => {
    const buttonContainerStyle = {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        minWidth: "100vw",
        fontWeight: "bold",
        padding: "40px 20px",
        boxSizing: "border-box"
    };

    const buttonStyle = {
        width: styles.approvalButtonWidth,
        height: styles.approvalButtonHeight,
        backgroundColor: "rgb(35, 160, 221)",
        borderRadius: 50,
        textTransform: "uppercase",
        color: styles.white(),
        fontSize: "1rem",
        fontWeight: "bold"
    }

    return (
        <div style={buttonContainerStyle}>
            <button style={buttonStyle}>Click here to get pre-qualified</button>
        </div>
    )
}

export default PreapproveButton;