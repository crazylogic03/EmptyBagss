import React from "react";

function Logcontent() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 100px", // increased right/left spacing
                marginTop: "120px", // pushed content slightly downward
                gap: "120px", // space between text and login card
            }}
        >
            {/* Left text section */}
            <div style={{ flex: 1 }}>
                <h1
                    style={{
                        fontSize: "48px",
                        fontWeight: "800",
                        color: "#222",
                        marginBottom: "16px",
                    }}
                >
                    Hey, I'm your personal{" "}
                    <span style={{ color: "#e34a0e" }}>Trip Planner</span>
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        color: "#555",
                        maxWidth: "600px",
                        lineHeight: "1.6",
                    }}
                >
                    Tell me what you want, and I'll handle the rest — flights, hotels,
                    and complete trip planning — all in seconds.
                </p>
            </div>

            <div
                style={{
                    flexShrink: 0,
                    width: "350px",
                    boxShadow: "0 4px 20px rgba(0,0,0,0.1)",
                    borderRadius: "12px",
                    padding: "30px",
                    textAlign: "center",
                    marginTop: "60px",
                }}
            >
                <h3 style={{ marginBottom: "12px" }}>Login Form</h3>
                <p style={{ fontSize: "14px", color: "#777" }}>
                    (Your login/signup component goes here)
                </p>
            </div>
        </div>
    );
}

export default Logcontent;
