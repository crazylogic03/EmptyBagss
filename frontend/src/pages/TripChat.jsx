import React, { useState } from "react";

function TripChat() {
    const [messages, setMessages] = useState([]);
    const [input, setInput] = useState("");

    const handleSend = () => {
        if (!input.trim()) return;

        const newMessage = { text: input, sender: "user" };
        setMessages([...messages, newMessage]);
        setInput("");

        // this is for timebeing 
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
                width: "350px",
                height: "500px",
                border: "1px solid #ddd",
                borderRadius: "12px",
                boxShadow: "0 3px 10px rgba(0,0,0,0.1)",
                display: "flex",
                flexDirection: "column",
                justifyContent: "space-between",
                backgroundColor: "#fafafa",
                overflow: "hidden",
            }}
        >
            {/* Chat messages */}
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
                            alignSelf:
                                msg.sender === "user" ? "flex-end" : "flex-start",
                            backgroundColor:
                                msg.sender === "user" ? "#e34a0e" : "#ececec",
                            color: msg.sender === "user" ? "#fff" : "#000",
                            padding: "10px 15px",
                            borderRadius: "18px",
                            maxWidth: "80%",
                            fontSize: "15px",
                        }}
                    >
                        {msg.text}
                    </div>
                ))}
            </div>

            {/* Input box */}
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

export default TripChat;
