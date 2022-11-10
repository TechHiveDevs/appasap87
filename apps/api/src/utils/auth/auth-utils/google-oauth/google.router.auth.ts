import express from "express";
import passport from "passport";

// ================================================================

const googleOAuthRouter = express.Router();
const successRedirect = "http://localhost:3000/";
const failureRedirect = "/auth/login/failed";

// ================================================================

const passportGoogleRedirect = passport.authenticate("google", {
  failureMessage: "Cannot login to google ",
  passReqToCallback: true,
  failureRedirect,
  successRedirect,
});

// ================================================================
// Google Router

// auth/google/
googleOAuthRouter.route("/").get(
  passport.authenticate("google", {
    scope: ["profile", "email"],
  })
);

// ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

// auth/google/callback
googleOAuthRouter.get("/callback", passportGoogleRedirect);

// ================================================================

export default googleOAuthRouter;
