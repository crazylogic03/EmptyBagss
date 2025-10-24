const express = require("express");
const nodemailer = require("nodemailer");

const router = express.Router();

router.post("/", async (req, res) => {
    const { name, email, subject, message } = req.body;

    if (!name || !email || !subject || !message) {
        return res.status(400).json({ error: "All fields are required." });
    }

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
            subject: `New Contact Form: ${subject}`,
            text: `You received a new message:\n\nName: ${name}\nEmail: ${email}\n\nMessage:\n${message}`,
        };
        await transporter.sendMail(mailOptions);

        res.status(200).json({ success: "Your message has been sent successfully!" });
    } catch (error) {
        console.error("Error sending email:", error);
        res.status(500).json({ error: "Failed to send message. Please try again later." });
    }
});

module.exports = router;
