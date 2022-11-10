/*
 * GitHub OAuth Strategy by Passport.js
 *
 **/

// ---------------------------------------------------------

import { Strategy as GithubStrategy } from "passport-github2";
import { findOrCreateGithubUser } from "../../auth-services/auth.service";
import { configs } from "../../../configs/configs";

// ---------------------------------------------------------

const {
  clientID,
  clientSecret,
  callbackURL,
  consumerKey,
  consumerSecret,
  passReqToCallback,
} = configs;

const options: any = {
  clientID,
  clientSecret,
  callbackURL,
  consumerKey,
  consumerSecret,
  passReqToCallback,
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
    const { id: githubId } = profile;

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    const payload = { githubId };
    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // find or create
    let user = await findOrCreateGithubUser(payload);
    if (!user) return done(null, false);
    const reponseUser = { ...user, accessToken, refreshToken };
    return done(null, reponseUser);
  } catch (err) {
    return done(err, false);
  }
};

// ---------------------------------------------------------

export default new GithubStrategy(options, verifyCallBack);
