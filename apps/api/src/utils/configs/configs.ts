/**
 *  Configs
 * ----------------
 * 1 - cookies used for auth
 * 2 - cors
 * 3 - General configs
 *
 * @author MarioMonir
 *
 */

// ---------------------------------------------------

/** Cookie configs
 * -------------------
 * secure: a boolean indicating
 * whether the cookie is only
 * to be sent over HTTPS
 *
 * max age in milliseconds = 24 * 60 * 60 * 1000 = 1day
 *
 * false by default for HTTP,
 * true by default for HTTPS
 * {@link https://github.com/expressjs/cookie-session}
 *
 */

export const cookiesConfigs: any = {
  maxAge: 24 * 60 * 60 * 100,
  keys: [process.env.COOKIE_KEY],
  // secure: true,
  name: "session",
};

// ---------------------------------------------------

/**
 *  Cors Configs
 *  ------------------
 * {@link https://github.com/expressjs/cors}
 */
export const corsConfigs = {
  origin: "*",
  methods: "GET,POST,PUT,DELETE",
  credentials: true,
};

// ---------------------------------------------------

// # DATABASE_URL="mysql://<db_user>:<db_password>@localhost:3306/<db_name>?connection_limit=5"

/**
 * General Configs
 * ----------------
 */
export const configs: {
  jwtSecret: string;
  jwtExpires: string;
  issuer: string;
  audience: string;
  clientID: string;
  clientSecret: string;
  callbackURL: string;
  consumerKey: string;
  consumerSecret: string;
  passReqToCallback: boolean;
  port: string;
  baseUrl: string;
  corsOrigin: string;
  projectName: string;
  smtpHost: string;
  smtpPort: string;
  smtpSecure: string;
  authEmail: string;
  authPassword: string;
} = {
  smtpHost: process.env.SMTP_HOST || "",
  smtpPort: process.env.SMTP_PORT || "",
  smtpSecure: process.env.SMTP_SECURE || "",
  authEmail: process.env.AUTH_EMAIL || "",
  authPassword: process.env.AUTH_PASSWORD || "",
  projectName: process.env.PROJECT_NAME || "APP ASAP",
  baseUrl: process.env.BASE_URL || "http://localhost:5000",
  port: process.env.PORT || "5000",
  corsOrigin: process.env.CORS_ORIGIN || "http://localhost:3000",
  jwtSecret: process?.env.jwtSecret || "secret",
  jwtExpires: process?.env.jwtExpires || "7d",
  issuer: process?.env.ISSUER || "",
  audience: process?.env.AUDIENCE || "",
  clientID: process.env.GOOGLE_CLIENT_ID || "",
  clientSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  callbackURL: process.env.GOOGLE_CALLBACK_URL || "",
  consumerKey: process.env.GOOGLE_CLIENT_ID || "",
  consumerSecret: process.env.GOOGLE_CLIENT_SECRET || "",
  passReqToCallback: true,
};

// ---------------------------------------------------
