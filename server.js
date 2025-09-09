import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
const PORT = 5000;

app.use(cors());
app.use(express.json());

// Configure Nodemailer (use your credentials)
const transporter = nodemailer.createTransport({
  service: "gmail",
  auth: {
    user: "michaelmorks30@gmail.com",
    pass: "password", // Use App Password, not normal password
  },
});

app.post("/subscribe", async (req, res) => {
  const { email } = req.body;

  if (!email) {
    return res.status(400).json({ error: "Email is required" });
  }

  try {
    await transporter.sendMail({
      from: "michaelmorks30@gmail.com",
      to: email,
      subject: "Welcome to DEV@Deakin!",
      text: "Thanks for subscribing to our newsletter. Stay tuned!",
    });

    res.status(200).json({ message: "Welcome email sent!" });
  } catch (error) {
    console.error(error);
    res.status(500).json({ error: "Failed to send email" });
  }
});

app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
});
