const express = require("express");
const passport = require("passport");
const router = express.Router();

router.get(
    "/google",
    passport.authenticate("google", { scope: ["profile", "email"] })
);

router.get(
    "/google/callback",
    passport.authenticate("google", { failureRedirect: "/login" }),
    (req, res) => {
        res.redirect("http://localhost:5173/home");
    }
);

router.get("/logout", (req, res) => {
    req.logout(() => {
        res.redirect("http://localhost:5173/login");
    });
});

router.get("/user", (req, res) => {
    if (req.isAuthenticated()) {
        res.json(req.user);
    } else {
        res.status(401).json({ message: "Not authenticated" });
    }
});

module.exports = router;
