/**
 *  Auth Controller
 *
 */

// -------------------------------------------------------------

import {
  register,
  login,
  softDelete,
  resetPassword,
  updateUserPermission,
} from "./auth-services/auth.service";
import { NextFunction, Request, Response } from "express";

// -------------------------------------------------------------

// /oauth/me
export const me = (req: Request, res: Response) => {
  return res.status(200).json({ user: req.user });
};

// -------------------------------------------------------------

// /oauth/register
export const registerController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const user = await register(req?.body);
    return res.status(201).json({ user });
  } catch (error) {
    next(error);
  }
};

// -------------------------------------------------------------

// /oauth/login
export const loginController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, password } = req?.body;
    const user = await login({ email, password });
    return res.status(202).json({ user });
  } catch (error) {
    next(error);
  }
};

// -------------------------------------------------------------

// /oauth/reset-password
export const resetPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { email, oldPassword, newPassword } = req?.body;
    const user = resetPassword({ email, oldPassword, newPassword });
    return res.status(202).json({ user });
  } catch (error) {
    next(error);
  }
};
// -------------------------------------------------------------

// /oauth/delete
export const deleteAccountController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req?.params;
    const user = await softDelete(+id);
    return res.status(202).json({ user });
  } catch (error) {
    next(error);
  }
};

// -------------------------------------------------------------

export const forgotPasswordController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // try {
  //   const email: any = req?.body?.email;
  //   if (!email) return res.status(400).json({ message: "email is required" });
  //   const isThirdParty: any = await isThirdPartyUser({ email });
  //   if (
  //     isThirdParty === "notFound" ||
  //     isThirdParty === "deleted" ||
  //     isThirdParty
  //   ) {
  //     return res.status(500).json({ message: "Invalid User" });
  //   }
  //   const user = await sendOtp({ email });
  //   if (user === "emailerror") res.status(500).json({ message: "Email error" });
  //   return res.status(202).json({ user });
  // } catch (error) {
  //   next(error);
  // }
};

// -------------------------------------------------------------

export const changePasswordOTPController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  // try {
  //   const { otp, email, newPassword, confirmPassword } = req?.body;
  //   // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  //   if (!otp || !email || !newPassword || !confirmPassword) {
  //     throw {
  //       status: 400,
  //       message: "email, oldPassword , newPassword and OTP are required",
  //     };
  //   }
  //   // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  //   if (newPassword !== confirmPassword) {
  //     return res.status(400).json({ message: "Invalid Password" });
  //   }
  //   // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  //   const isThirdParty = await isThirdPartyUser({ email });
  //   if (
  //     isThirdParty === "notFound" ||
  //     isThirdParty === "deleted" ||
  //     isThirdParty
  //   ) {
  //     return res.status(500).json({ message: "Invalid User" });
  //   }
  //   const user = await changePasswordOTP(email, newPassword, otp);
  //   if (user === "notFound")
  //     return res.status(401).json({ message: "Not Found" });
  //   if (user === "deleted")
  //     return res.status(401).json({ message: "Deleted User" });
  //   if (user === "invalidotp")
  //     return res.status(401).json({ message: "Invalid OTP" });
  //   return res.status(202).json({ ...user });
  // } catch (error) {
  //   next(error);
  // }
};

// -------------------------------------------------------------

export const updateUserPermissionController = async (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  try {
    const { id } = req?.params;
    const { permissions } = req?.body;
    const user = await updateUserPermission({ id: +id, permissions });
    return res.status(202).json({ user });
  } catch (error) {
    next(error);
  }
};

// -------------------------------------------------------------
