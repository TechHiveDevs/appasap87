import { Router, Request, Response } from "express";
import passport from "passport";

// ================================================================

const githubOAuthRouter = Router();
const successRedirect = "http://localhost:3000/";
const failureRedirect = "/auth/login/failed";

// ================================================================

const successCallBack = (req: Request, res: Response) =>
  res.send({ message: "thank you for sign in ", user: req.user });

// ================================================================

const passportGithubMiddleWare = passport.authenticate("github", {
  failureMessage: "Cannot login to github ",
  passReqToCallback: true,
  failureRedirect,
  successRedirect,
});

// ================================================================
// Github Router

// auth/github/
githubOAuthRouter.route("/").get(
  passport.authenticate("github", {
    scope: ["user:email"],
  })
);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// auth/github/callback
githubOAuthRouter.get("/callback", passportGithubMiddleWare, successCallBack);

// ================================================================

export default githubOAuthRouter;
