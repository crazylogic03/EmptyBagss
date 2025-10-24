import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Dashboard() {
    const [showChat, setShowChat] = useState(false);
    const [startPlace, setStartPlace] = useState("");
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
            {/* Title */}
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

            {/* Main layout: Chat (left) + Input + Buttons (right) */}
            <div
                style={{
                    display: "flex",
                    alignItems: "flex-start",
                    justifyContent: "center",
                    gap: "60px",
                    width: "100%",
                    maxWidth: "1200px",
                    marginTop: "30px",
                }}
            >
                {/* Chat section */}
                {showChat && <TripChat />}

                {/* Input + Buttons section */}
                <div
                    style={{
                        flex: 1,
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "center",
                        justifyContent: "center",
                    }}
                >
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
                            value={startPlace}
                            onChange={(e) => setStartPlace(e.target.value)}
                            style={{
                                width: "420px",
                                padding: "14px 18px",
                                fontSize: "16px",
                                borderRadius: "10px",
                                border: "1px solid #ccc",
                                outline: "none",
                            }}
                        />
                        <button
                            onClick={() => {
                                if (startPlace.trim()) setShowChat(true);
                            }}
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
                            Send
                        </button>
                    </div>

                    {/* 4 Feature Buttons */}
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
            </div>
        </div>
    );
}

/* Chat component (from your TripChat) */
function TripChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);
        setInput("");

        // Mock bot reply (frontend only)
        setTimeout(() => {
            setMessages((prev) => [
                ...prev,
                { text: "Got it! Let's plan your trip 🎒", sender: "bot" },
            ]);
        }, 800);
    };

    return (
        <div
            style={{
                width: "400px",
                height: "520px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 3px 12px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fafafa",
                overflow: "hidden",
            }}
        >
            {/* Messages */}
            <div
                style={{
                    flex: 1,
                    overflowY: "auto",
                    padding: "15px",
                    display: "flex",
                    flexDirection: "column",
                    gap: "10px",
                }}
            >
                {messages.map((msg, i) => (
                    <div
                        key={i}
                        style={{
                            alignSelf: msg.sender === "user" ? "flex-end" : "flex-start",
                            backgroundColor:
                                msg.sender === "user" ? "#e34a0e" : "#ececec",
                            color: msg.sender === "user" ? "#fff" : "#000",
                            padding: "10px 15px",
                            borderRadius: "18px",
                            maxWidth: "80%",
                            fontSize: "15px",
                            wordBreak: "break-word",
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input area */}
            <div
                style={{
                    display: "flex",
                    borderTop: "1px solid #ddd",
                    padding: "10px",
                    backgroundColor: "#fff",
                }}
            >
                <input
                    type="text"
                    value={input}
                    onChange={(e) => setInput(e.target.value)}
                    placeholder="Type a message..."
                    style={{
                        flex: 1,
                        border: "none",
                        outline: "none",
                        fontSize: "15px",
                    }}
                />
                <button
                    onClick={handleSend}
                    style={{
                        backgroundColor: "#e34a0e",
                        color: "#fff",
                        border: "none",
                        borderRadius: "8px",
                        padding: "6px 12px",
                        cursor: "pointer",
                    }}
                >
                    Send
                </button>
            </div>
        </div>
    );
}

/* Trip Buttons Style */
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
