import React from "react";
import { useNavigate } from "react-router-dom";

function Navbar({ user, onLogout }) {
    const navigate = useNavigate();

    return (
        <div
            style={{
                position: "fixed",
                top: 0,
                left: 0,
                width: "100%",
                borderBottom: "2px solid #e34a0e",
                height: "65px",
                backgroundColor: "#f5f5f5",
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "0 40px",
                boxShadow: "0 2px 6px rgba(0,0,0,0.1)",
                zIndex: 1000,
            }}
        >
            {/* Logo / Brand */}
            <h2
                style={{
                    fontSize: "22px",
                    fontWeight: "700",
                    cursor: "pointer",
                    color: "#e34a0e",
                }}
                onClick={() => navigate("/home")}
            >
                EmptyBags AI
            </h2>

            {/* Center Navigation Links */}
            <div
                style={{
                    display: "flex",
                    justifyContent: "center",
                    alignItems: "center",
                    gap: "30px",
                    flex: 1,
                }}
            >
                <h3
                    style={{
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        fontWeight: "500",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#3eb39f")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    onClick={() => navigate("/home")}
                >
                    Home
                </h3>

                <h3
                    style={{
                        cursor: "pointer",
                        transition: "color 0.3s ease",
                        fontWeight: "500",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#3eb39f")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    onClick={() => navigate("/contact")}
                >
                    Contact Us
                </h3>
            </div>

            {/* Right Side Buttons */}
            <div style={{ display: "flex", gap: "16px", alignItems: "center" }}>
                {/* Create + Show Trip (Always visible) */}
                <button
                    style={{
                        backgroundColor: "white",
                        border: "2px solid black",
                        color: "black",
                        padding: "8px 16px",
                        borderRadius: "100px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "#3eb39f")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    onClick={() => navigate("/trip")}
                >
                    + Create Trip
                </button>

                <button
                    style={{
                        backgroundColor: "white",
                        border: "2px solid black",
                        color: "black",
                        padding: "8px 16px",
                        borderRadius: "100px",
                        cursor: "pointer",
                        transition: "all 0.3s ease",
                    }}
                    onMouseEnter={(e) => (e.target.style.color = "orange")}
                    onMouseLeave={(e) => (e.target.style.color = "black")}
                    onClick={() => navigate("/show-trips")}
                >
                    Show Trips
                </button>

                {/* Google Profile + Logout / Login */}
                {user ? (
                    <>
                        {user.picture ? (
                            <img
                                src={user.picture}
                                alt="User"
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    cursor: "pointer",
                                }}
                            />
                        ) : (
                            <div
                                style={{
                                    width: "35px",
                                    height: "35px",
                                    borderRadius: "50%",
                                    backgroundColor: "#3eb39f",
                                    color: "white",
                                    display: "flex",
                                    alignItems: "center",
                                    justifyContent: "center",
                                    fontWeight: "bold",
                                    fontSize: "18px",
                                    cursor: "pointer",
                                }}
                            >
                                {user.name?.charAt(0).toUpperCase()}
                            </div>
                        )}
                        <button
                            onClick={onLogout}
                            style={{
                                backgroundColor: "#e36619",
                                color: "white",
                                padding: "6px 12px",
                                borderRadius: "6px",
                                border: "none",
                                cursor: "pointer",
                            }}
                        >
                            Logout
                        </button>
                    </>
                ) : (
                    <button
                        style={{
                            backgroundColor: "white",
                            border: "2px solid black",
                            color: "black",
                            padding: "8px 16px",
                            borderRadius: "100px",
                            cursor: "pointer",
                            transition: "all 0.3s ease",
                        }}
                        onMouseEnter={(e) => (e.target.style.color = "#3eb39f")}
                        onMouseLeave={(e) => (e.target.style.color = "black")}
                        onClick={() => navigate("/login")}
                    >
                        Login
                    </button>
                )}
            </div>
        </div>
    );
}

export default Navbar;
