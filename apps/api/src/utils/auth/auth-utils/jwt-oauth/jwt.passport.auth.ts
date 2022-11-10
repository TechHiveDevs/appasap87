/*
 * JWT OAuth Strategy by Passport.js
 *
 **/

// ---------------------------------------------------------

import { Strategy as JwtStrategy, ExtractJwt } from "passport-jwt";
import { getUserById } from "../../auth-services/auth.service";
import { configs } from "../../../configs/configs";

// ---------------------------------------------------------

const { jwtSecret: secretOrKey, issuer, audience } = configs;

// ---------------------------------------------------------

const options = {
  jwtFromRequest: ExtractJwt.fromAuthHeaderAsBearerToken(),
  secretOrKey,
  issuer,
  audience,
};

// ---------------------------------------------------------

const verifyCallBack = async (jwtPayload: any, done: any) => {
  try {
    const user = await getUserById(+jwtPayload?.id);
    if (!user) return done(null, false);

    return done(null, user);
  } catch (err) {
    return done(err, false);
  }
};

// ---------------------------------------------------------

export default new JwtStrategy(options, verifyCallBack);
