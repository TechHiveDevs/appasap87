
import express from "express";
import cors from "cors";
import path from "path";
import cookieParser from "cookie-parser";
import logger from "morgan";
import errors from "./src/utils/error/errorHandler.middlerware";
import swagger from "./src/utils/swagger-docs/swagger.middleware";
import passport from "passport";
import cookieSession from "cookie-session";
import { cookiesConfigs, corsConfigs } from "./src/utils/configs/configs";
import uploadRouter from "./src/utils/media/upload.media";
import i18nextMiddleware from "./src/utils/localization/localization.middleware";

// ------------------------------------------------------

// Auth
import authRouter from "./src/utils/auth/auth.router";
import passportAuthenticate from "./src/utils/auth/auth.middleware";

// ------------------------------------------------------

// Entities controllers imports
import userController from "./src/entities/user/user.controller";
import dndnode1667920489982Controller from "./src/entities/dndnode1667920489982/dndnode1667920489982.controller";
import dndnode1667920492099Controller from "./src/entities/dndnode1667920492099/dndnode1667920492099.controller";


// ------------------------------------------------------

const app = express();

// ------------------------------------------------------

// Middlewares ( web )
app.use(i18nextMiddleware);
app.use(cors(corsConfigs));
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.use(cookieSession(cookiesConfigs));
app.use(passport.initialize());
app.use(passport.session());

// ------------------------------------------------------

// Static Files ( Uploaded Images )
app.use("/assets", express.static(path.join(__dirname, "/assets")));

// ------------------------------------------------------

// Swagger Documentaion Middleware
app.use("/api-docs", swagger.server, swagger.setup); // Docs

// ------------------------------------------------------

// Auth Router ( login / register / ...)
app.use(authRouter);

// Auth Passport Protect Middleware
// app.use(passportAuthenticate(passport));

// ------------------------------------------------------

// Entities contollers use
app.use(userController)
app.use(dndnode1667920489982Controller)
app.use(dndnode1667920492099Controller)


// ------------------------------------------------------

// Upload Media Files
app.use(uploadRouter);

// ------------------------------------------------------

// Error Handlers
app.use(errors.catchNotFound);
app.use(errors.errorHandler);

//---------------------------------------------------

export default app;