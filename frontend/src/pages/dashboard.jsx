import React from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const navigate = useNavigate();

    return (
        <div
            style={{
                minHeight: "90vh",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                justifyContent: "center",
                textAlign: "center",
                padding: "40px 20px",
            }}
        >
            <h1
                style={{
                    fontSize: "42px",
                    fontWeight: "700",
                    color: "#222",
                    marginBottom: "20px",
                }}
            >
                Hey, I'm your personal{" "}
                <span style={{ color: "#e34a0e" }}>Trip Planner</span>
            </h1>

            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    marginBottom: "40px",
                    gap: "10px",
                }}
            >
                <input
                    type="text"
                    placeholder="Enter your starting place..."
                    style={{
                        width: "400px",
                        padding: "12px 18px",
                        fontSize: "16px",
                        borderRadius: "10px",
                        border: "1px solid #ccc",
                        outline: "none",
                    }}
                />
                <button
                    style={{
                        backgroundColor: "#e34a0e",
                        color: "white",
                        border: "none",
                        padding: "12px 20px",
                        borderRadius: "10px",
                        fontSize: "16px",
                        cursor: "pointer",
                    }}
                >
                    Create
                </button>
            </div>

            <div
                style={{
                    display: "flex",
                    flexWrap: "wrap",
                    justifyContent: "center",
                    gap: "20px",
                }}
            >
                <button
                    onClick={() => navigate("/trip")}
                    style={buttonStyle("#007bff")}
                >
                    🌍 Create New Trip
                </button>

                <button
                    onClick={() => navigate("/trip")}
                    style={buttonStyle("#00c853")}
                >
                    ✈️ Inspire me where to go
                </button>

                <button
                    onClick={() => navigate("/trip")}
                    style={buttonStyle("#ff6d00")}
                >
                    🏛️ Discover Hidden Gems
                </button>

                <button
                    onClick={() => navigate("/trip")}
                    style={buttonStyle("#ffab00")}
                >
                    🧗 Adventure Destination
                </button>
            </div>
        </div>
    );
}

const buttonStyle = (color) => ({
    backgroundColor: "white",
    color: "#333",
    border: `2px solid ${color}`,
    borderRadius: "50px",
    padding: "12px 25px",
    fontSize: "16px",
    fontWeight: "500",
    cursor: "pointer",
    boxShadow: "0 3px 8px rgba(0,0,0,0.1)",
    transition: "all 0.3s ease",
    display: "flex",
    alignItems: "center",
    gap: "8px",
});

export default Dashboard;
