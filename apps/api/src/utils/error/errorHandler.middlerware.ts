import prismaErrorHandler from "./primsaErrorHanlder.middleware";
import { Error } from "./errors.utils";

// ------------------------------------------------------------------

const catchNotFound = (_: any, __: any, next: any) => {
  try {
    Error("NotFound");
  } catch (error) {
    next(error);
  }
};

// ------------------------------------------------------------------

const errorHandler = (error: any, req: any, res: any, next: any) => {
  res.locals.message = error.message;
  res.locals.error = req.app.get("env") === "development" ? error : {};

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  console.error(error);

  // Prisma Error
  if (error?.name === "Error") {
    prismaErrorHandler(error, req, res, next);
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  let defaultMessage = "InternalServerError";

  let errorJson = {
    ...error,
    status: error?.status || 500,
    url: req?.originalUrl,
    method: req?.method,
    name: error?.name,
    message: req.t(error?.message || defaultMessage).trim(),
    // stack: error?.stack || "",
  };

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // console.error({ errorJson });

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  res.status(errorJson?.status).json(errorJson);
};

// ------------------------------------------------------------------

export default { catchNotFound, errorHandler };
