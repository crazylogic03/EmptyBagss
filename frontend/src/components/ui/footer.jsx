import React from "react";

function Footer() {
    return (
        <footer
            style={{
                backgroundColor: "#e34a0e",
                color: "white",
                textAlign: "center",
                padding: "16px 0",
                position: "fixed", // stays at bottom
                bottom: 0,
                left: 0,
                width: "100%",
                fontWeight: "500",
                fontSize: "16px",
                letterSpacing: "0.5px",
                boxShadow: "0 -2px 5px rgba(0,0,0,0.1)",
            }}
        >
            <p style={{ margin: 0 }}>
                © {new Date().getFullYear()} EmptyBags AI.
            </p>
            <p>All rights reserved.</p>
        </footer>
    );
}

export default Footer;
