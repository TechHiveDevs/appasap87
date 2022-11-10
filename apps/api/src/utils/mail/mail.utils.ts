/**
 * Mail and OTP mailing module
 * @author MarioMonir
 */

// ----------------------------------------------------------------

import nodemailer from "nodemailer";
import { configs } from "../configs/configs";

// ----------------------------------------------------------------

/**
 * Generate Random OTP
 * @param numberOfDigits
 * @returns random OTP of 6 digits string
 */
const generateRandomOTP = (numberOfDigits: number = 6): string => {
  return Math.floor(
    Math.pow(10, numberOfDigits - 1) +
      Math.random() * 9 * Math.pow(10, numberOfDigits - 1)
  ).toString();
};

// ----------------------------------------------------------------

/**
 * Send One time otpvia Email Address
 * @param param0
 */
export async function mailOTP({ email, otp }: any): Promise<void> {
  let transporter = nodemailer.createTransport({
    // @ts-ignore
    host: configs.smtpHost,
    port: configs.smtpPort,
    secure: configs.smtpSecure,
    auth: {
      user: configs.authEmail,
      pass: configs.authPassword,
    },
  });

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  await transporter.sendMail({
    from: "<" + process.env.AUTH_EMAIL + ">",
    to: email,
    subject: "One Time Password",
    text: "Your One Time Password is\t\t" + otp,
    html:
      "<b>Hello</b><p>Your One Time Password is <strong> " +
      otp +
      " </strong></p>", // html body
  });
}

// ----------------------------------------------------------------

export const sendOTPMail = async ({ email }: any): Promise<void> => {
  return await mailOTP({ email, otp: generateRandomOTP(6) });
};
