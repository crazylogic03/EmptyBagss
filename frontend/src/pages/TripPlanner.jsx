import React from "react";
import TripChat from "./TripChat";

function TripPlanner() {
    return (
        <div
            style={{
                minHeight: "90vh",
                display: "flex",
                alignItems: "flex-start",
                justifyContent: "center",
                gap: "50px",
                padding: "100px 50px",
                backgroundColor: "#fff",
            }}
        >
            {/* 💬 Left side - Chat Box */}
            <TripChat />

            {/* ✈️ Right side - Trip planner inputs */}
            <div
                style={{
                    flex: 1,
                    textAlign: "center",
                    maxWidth: "600px",
                }}
            >
                <h1
                    style={{
                        color: "#e34a0e",
                        fontSize: "40px",
                        fontWeight: "700",
                    }}
                >
                    Let's Plan Your Trip! 🌍
                </h1>

                <p
                    style={{
                        fontSize: "18px",
                        marginTop: "12px",
                        color: "#555",
                    }}
                >
                    Tell me your preferences — I’ll find destinations, hotels, and experiences for you.
                </p>

                <div
                    style={{
                        marginTop: "50px",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        gap: "15px",
                    }}
                >
                    <div style={{ display: "flex", gap: "10px" }}>
                        <input
                            type="text"
                            placeholder="From (e.g., New York)"
                            style={{
                                padding: "12px 15px",
                                width: "280px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "16px",
                            }}
                        />
                        <input
                            type="text"
                            placeholder="To (e.g., Paris)"
                            style={{
                                padding: "12px 15px",
                                width: "280px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                outline: "none",
                                fontSize: "16px",
                            }}
                        />
                    </div>

                    <button
                        style={{
                            backgroundColor: "#e34a0e",
                            color: "white",
                            padding: "12px 25px",
                            border: "none",
                            borderRadius: "8px",
                            marginTop: "15px",
                            cursor: "pointer",
                            fontSize: "16px",
                            fontWeight: "600",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#cf3f09")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#e34a0e")}
                    >
                        Generate Trip Plan
                    </button>
                </div>
            </div>
        </div>
    );
}

export default TripPlanner;
