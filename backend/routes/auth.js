const express = require("express");
const passport = require("passport");
const router = express.Router();

// Google Login
router.get("/google", passport.authenticate("google", { scope: ["profile", "email"] }));

// Google Callback
router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "http://localhost:5173/login" }),
    (req, res) => {
        res.redirect("http://localhost:5173/home");
    }
);

// Get Authenticated User
router.get("/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json(req.user);
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

// Better Auth Status Check (fixes white screen)
router.get("/status", (req, res) => {
    if (req.isAuthenticated()) {
        res.status(200).json({ authenticated: true, user: req.user });
    } else {
        res.status(200).json({ authenticated: false });
    }
});

// Logout
router.get("/logout", (req, res, next) => {
    req.logout((err) => {
        if (err) return next(err);
        req.session.destroy(() => {
            res.clearCookie("connect.sid");
            res.redirect("http://localhost:5173/login");
        });
    });
});

module.exports = router;
