/**
 *  Passport Authentication
 *
 * @author MarioMonir
 */

// ------------------------------------------------------------------

import { Request, Response, NextFunction } from "express";
import googlePassportStrategy from "./auth-utils/google-oauth/google.passport.auth";
import githubPassportStrategy from "./auth-utils/github-oauth/github.passport.auth";
import jwtPassportStrategy from "./auth-utils/jwt-oauth/jwt.passport.auth";
import { Error } from "../error/errors.utils";
import { checkPermissions } from "./auth-utils/my-utils/checkPermission.utils";
import { getUserById } from "./auth-services/auth.service";

// ------------------------------------------------------------------

const passportAuthenticate = (passport: any) => {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  // Strategies

  // Google OAuth Strategy
  passport.use(googlePassportStrategy);

  // GitHub OAuth Strategy
  passport.use(githubPassportStrategy);

  // JWT OAuth Strategy
  passport.use(jwtPassportStrategy);

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  /* Serialize user
   * --------------------
   * determines which data of the user object should be stored in the session.
   * The result of the serializeUser method is attached to the session as user.id
   * take user  -> attach user.id in the session
   *
   **/
  passport.serializeUser((user: any, done: any) => done(null, user.id));

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  /* Deserialize user
   * --------------------
   * retrieve the whole user object by it's user id that has been stored
   * in the session by serializeUser
   * takes user.id return the whole user from the database
   *
   **/
  passport.deserializeUser(async (userId: string, done: any) => {
    try {
      const user = await getUserById(+userId);
      if (!user) return done(null, false);
      return done(null, user);
    } catch (err) {
      return done(err, null);
    }
  });

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // Passport Auth Middleware
  // return passport.authenticate("jwt", { session: false })
  return (req: Request, res: Response, next: NextFunction) =>
    passport.authenticate("jwt", (err: any, user: any, _: any) => {
      try {
        if (err) next(err);

        // Invalid Token
        if (!user) Error("Unauthorized");

        req.user = user;

        // Validate Permissions
        // checkPermissions(req as any);
      } catch (error) {
        next(error);
      }

      next();
    })(req, res, next);
};

// ------------------------------------------------------------------

export default passportAuthenticate;
