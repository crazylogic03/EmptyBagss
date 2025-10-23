import React from "react";

function Logcontent() {
    return (
        <div
            style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 100px",
                marginTop: "120px",
                gap: "120px",
            }}
        >
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
        </div>
    );
}

export default Logcontent;
