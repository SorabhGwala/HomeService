import express from "express";
const router = express.Router();

import { sendOtp, sendEventRegistration } from "../controller/emailController.js";
import { otpStore } from "../config/otpStore.js";

router.post("/send-otp", async (req, res) => {
  const { email, location } = req.body;
  console.log('Received Location:', location);

  try {
    const otp = Math.floor(100000 + Math.random() * 900000).toString();
    otpStore[email] = {
      otp,
      expiresAt: Date.now() + 5 * 60 * 1000,
    };
    await sendOtp({ email, otp, location });

    res.status(200).json({ success: true });
  } catch (error) {
    console.error("Email server error:", error);
    res.status(500).json({ success: false, message: "Email send failed." });
  }
});

router.post("/verify-otp", async (req, res) => {
  const { email, otp, eventTitle, location } = req.body;
  if (!email || !otp) return res.status(400).json({ success: false, message: "Email and OTP are required" });

  try {
    const otpData = otpStore[email];
    if (!otpData) return res.status(400).json({ success: false, message: "OTP not found or expired" });

    if (Date.now() > otpData.expiresAt) {
      delete otpStore[email];
      return res.status(400).json({ success: false, message: "OTP expired" });
    }

    if (otp !== otpData.otp) return res.status(400).json({ success: false, message: "Invalid OTP" });
    console.log(location);
    console.log(email, otp);
    await sendEventRegistration({ email, eventTitle, location });
    res.status(200).json({
      success: true,
      message: `OTP Verified, register successful for ${eventTitle} at ${location}`,
    });
  } catch (error) {
    res.status(500).json({ success: false, message: "OTP verification failed" });
  }
});


router.put('/reset-password', async (req, res) => {
  const { email, newPassword } = req.body;
  if (!email || !newPassword) return res.status(400).json({ success: false, message: "Email and new password are required" });
  try {
    // Here you would typically update the password in your database
    // For demonstration, we'll just log it
    console.log(`Password for ${email} has been reset to: ${newPassword}`);
    res.status(200).json({ success: true, message: "Password reset successfully" });
  } catch (error) {
    console.error("Error resetting password:", error);
    res.status(500).json({ success: false, message: "Password reset failed" });
  }
});

export default router;
