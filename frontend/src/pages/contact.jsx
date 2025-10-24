import React, { useState } from "react";

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        type: "feedback",
        message: "",
    });
    const [status, setStatus] = useState("");

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setStatus("Sending...");

        try {
            // This will connect to your backend later
            await fetch("http://localhost:3000/contact", {
                method: "POST",
                headers: { "Content-Type": "application/json" },
                body: JSON.stringify(formData),
            });

            setStatus("✅ Your message has been sent successfully!");
            setFormData({ name: "", email: "", type: "feedback", message: "" });
        } catch (error) {
            console.error(error);
            setStatus("❌ Something went wrong. Try again later.");
        }
    };

    return (
        <div
            style={{
                minHeight: "90vh",
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                backgroundColor: "#fff",
                padding: "50px 20px",
            }}
        >
            <div
                style={{
                    width: "100%",
                    maxWidth: "600px",
                    border: "1px solid #ddd",
                    borderRadius: "16px",
                    padding: "40px",
                    boxShadow: "0 4px 10px rgba(0,0,0,0.1)",
                }}
            >
                <h2
                    style={{
                        fontSize: "28px",
                        fontWeight: "700",
                        marginBottom: "20px",
                        color: "#e34a0e",
                        textAlign: "center",
                    }}
                >
                    Contact Us ✉️
                </h2>

                <p style={{ textAlign: "center", color: "#666", marginBottom: "30px" }}>
                    Got a complaint, issue, or feedback? We’d love to hear from you.
                </p>

                <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
                    <input
                        type="text"
                        name="name"
                        placeholder="Your Name"
                        value={formData.name}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />
                    <input
                        type="email"
                        name="email"
                        placeholder="Your Email"
                        value={formData.email}
                        onChange={handleChange}
                        required
                        style={inputStyle}
                    />

                    <select
                        name="type"
                        value={formData.type}
                        onChange={handleChange}
                        style={inputStyle}
                    >
                        <option value="feedback">Feedback</option>
                        <option value="complaint">Complaint</option>
                        <option value="issue">Issue</option>
                    </select>

                    <textarea
                        name="message"
                        placeholder="Enter your message here..."
                        value={formData.message}
                        onChange={handleChange}
                        rows="5"
                        required
                        style={{ ...inputStyle, resize: "none" }}
                    />

                    <button
                        type="submit"
                        style={{
                            backgroundColor: "#e34a0e",
                            color: "white",
                            border: "none",
                            borderRadius: "10px",
                            padding: "12px 20px",
                            fontSize: "16px",
                            fontWeight: "600",
                            cursor: "pointer",
                            transition: "background-color 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.backgroundColor = "#cf3f09")}
                        onMouseLeave={(e) => (e.target.style.backgroundColor = "#e34a0e")}
                    >
                        Send Message
                    </button>
                </form>

                {status && (
                    <p style={{ marginTop: "15px", textAlign: "center", color: "#333" }}>
                        {status}
                    </p>
                )}
            </div>
        </div>
    );
}

const inputStyle = {
    padding: "12px 15px",
    borderRadius: "10px",
    border: "1px solid #ccc",
    outline: "none",
    fontSize: "16px",
    width: "100%",
};

export default Contact;
