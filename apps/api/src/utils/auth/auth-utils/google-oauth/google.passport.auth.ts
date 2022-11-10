/*
 * Google OAuth Strategy by Passport.js
 *
 **/

// ---------------------------------------------------------

import { Strategy as GoogleStrategy } from "passport-google-oauth20";
import { findOrCreateGoogleUser } from "../../auth-services/auth.service";

// ---------------------------------------------------------

const options: any = {
  clientID: process.env.GOOGLE_CLIENT_ID,
  clientSecret: process.env.GOOGLE_CLIENT_SECRET,
  callbackURL: process.env.GOOGLE_CALLBACK_URL,
  consumerKey: process.env.GOOGLE_CLIENT_ID,
  consumerSecret: process.env.GOOGLE_CLIENT_SECRET,
  passReqToCallback: true,
};

// ---------------------------------------------------------

const verifyCallBack: any = async (
  _: Request,
  accessToken: string,
  refreshToken: string,
  profile: any,
  done: any
) => {
  try {
    const { id: googleId } = profile;

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    const payload = { googleId };

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // find or create
    let user = await findOrCreateGoogleUser(payload);
    if (!user) return done(null, false);

    const reponseUser = { ...user, accessToken, refreshToken };
    return done(null, reponseUser);
  } catch (err) {
    return done(err, false);
  }
};

// ---------------------------------------------------------

export default new GoogleStrategy(options, verifyCallBack);
