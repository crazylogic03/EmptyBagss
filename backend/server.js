const express = require("express");
const cors = require("cors");
const nodemailer = require("nodemailer");

const app = express();
const port = 3000;

app.use(cors());
app.use(express.json());

// POST route for contact form
app.post("/contact", async (req, res) => {
    const { name, email, type, message } = req.body;

    console.log("📩 New contact form submission:");
    console.log({ name, email, type, message });

    try {
        // Create a transporter using Gmail
        const transporter = nodemailer.createTransport({
            service: "gmail",
            auth: {
                user: "YOUR_EMAIL@gmail.com", // replace with your email
                pass: "YOUR_APP_PASSWORD",    // replace with your 16-digit app password
            },
        });

        // Mail options
        const mailOptions = {
            from: email,
            to: "YOUR_EMAIL@gmail.com", // where you want to receive messages
            subject: `New ${type} from ${name}`,
            text: `From: ${name} (${email})\n\nType: ${type}\n\nMessage:\n${message}`,
        };

        // Send mail
        await transporter.sendMail(mailOptions);

        console.log("✅ Email sent successfully!");
        res.status(200).json({ message: "Email sent successfully!" });
    } catch (error) {
        console.error("❌ Error sending email:", error);
        res.status(500).json({ error: "Error sending email" });
    }
});

app.listen(port, () => {
    console.log(`🚀 Server running on http://localhost:${port}`);
});
