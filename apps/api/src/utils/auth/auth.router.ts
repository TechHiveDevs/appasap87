import { Router, Request, Response } from "express";
import googleOAuthRouter from "./auth-utils/google-oauth/google.router.auth";
import githubOAuthRouter from "./auth-utils/github-oauth/github.router.auth";
import {
  me,
  loginController,
  registerController,
  resetPasswordController,
  forgotPasswordController,
  deleteAccountController,
  changePasswordOTPController,
  updateUserPermissionController,
} from "./auth.controller";
import { configs } from "../configs/configs";

// ------------------------------------------------------

const authRouter = Router();

// ------------------------------------------------------

authRouter.route("/auth/login/success").get((req: Request, res: Response) => {
  if (req.user) {
    res.status(200).header({ credentials: "include" }).json({
      success: true,
      message: "successfull",
      user: req.user,
    });
  }
});

// ------------------------------------------------------

authRouter.route("/auth/login/failed").get((_: Request, res: Response) => {
  res.status(401).json({
    success: false,
    message: "failure",
  });
});

// ------------------------------------------------------

authRouter.route("/auth/logout").get((req: Request, res: Response) => {
  // @ts-ignore
  req.logout();
  res.redirect(configs.corsOrigin);
});

// ------------------------------------------------------

// Google OAuth
authRouter.use("/oauth/google", googleOAuthRouter);

// Github OAuth
authRouter.use("/oauth/github", githubOAuthRouter);

// JWT OAuth
authRouter.route("/oauth/register").post(registerController);
authRouter.route("/oauth/login").post(loginController);
authRouter.route("/oauth/forgot-password").post(forgotPasswordController);
authRouter.route("/oauth/confirm-otp").post(changePasswordOTPController);
authRouter.route("/oauth/me").get(me);
authRouter.route("/oauth/reset-password").post(resetPasswordController);
authRouter.route("/oauth/delete").delete(deleteAccountController);
authRouter
  .route("/oauth/update-user-permissions/:id")
  .put(updateUserPermissionController);

// ------------------------------------------------------

export default authRouter;
