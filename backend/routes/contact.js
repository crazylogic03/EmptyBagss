const express = require("express");
const nodemailer = require("nodemailer");
require("dotenv").config();

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, type, message } = req.body;

    console.log("📩 New contact form submission:");
    console.log({ name, email, type, message });

    try {
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: process.env.EMAIL_USER,
                pass: process.env.EMAIL_PASS,
            },
        });

        const mailOptions = {
            from: email,
            to: process.env.EMAIL_USER,
            subject: `New ${type} from ${name}`,
            text: `From: ${name} (${email})\n\nType: ${type}\n\nMessage:\n${message}`,
        };

        await transporter.sendMail(mailOptions);

        console.log("✅ Email sent successfully!");
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ error: "Error sending email" });
    }
});

module.exports = router;
