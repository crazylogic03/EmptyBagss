const express = require("express");
const cors = require("cors");
const session = require("express-session");
const passport = require("passport");
require("dotenv").config();

const connectDB = require("./config/db");
require("./config/passport");

const contactRoutes = require("./routes/contact");
const authRoutes = require("./routes/auth");

const app = express();
const PORT = process.env.PORT || 3000;

connectDB();

app.use(
    cors({
        origin: "http://localhost:5173",
        credentials: true,
    })
);

app.use(express.json());
app.use(
    session({
        secret: process.env.SESSION_SECRET || "default_secret_key",
        resave: false,
        saveUninitialized: false,
        cookie: {
            secure: false, // only true in production
            httpOnly: true,
            sameSite: "lax",
        },
    })
);

app.use(passport.initialize());
app.use(passport.session());

app.use("/api/contact", contactRoutes);
app.use("/auth", authRoutes);

app.get("/", (req, res) => {
    res.send("🚀 Server running with MongoDB + Google OAuth");
});

app.listen(PORT, () => console.log(`✅ Server running on http://localhost:${PORT}`));
