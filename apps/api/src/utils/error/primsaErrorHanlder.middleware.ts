/**
 *  Prisma Error Hadndler Middleware
 *
 * aims to follow prisma convention to catch errors
 * and send it formatted
 *
 */

// ---------------------------------------------------------------

import PrismaErrors from "./prismaErrors";
import { Request, Response, NextFunction } from "express";
import { request } from "http";

// ---------------------------------------------------------------

const extractPrismaMissingArguments = (error: any, readableError: any) => {
  const regex = /(?<=Argument )(.*)(?= for)/g;
  let match;
  let extracts: any = new Set();

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  while ((match = regex.exec(error?.message)) !== null) {
    // This is necessary to avoid infinite loops with zero-width matches
    if (match.index === regex.lastIndex) regex.lastIndex++;
    match.forEach((match) => extracts.add(match));
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // Append Error extracts to error message
  extracts = [...extracts];
  if (extracts.length) {
    extracts?.map((extract: any, index: any) => {
      readableError += `${extract}`;
      if (index < extracts.length - 1) {
        readableError += ", ";
      }
    });
    readableError += " is Required !";
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  return readableError;
};

// ---------------------------------------------------------------

const prettyViolationErrorMessage = (error: any, req: Request) => {
  const { code, meta } = error;
  const name: any = PrismaErrors.codeToName[code];

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  //TODO: check if database is not connected

  // Please make sure your database server is running at `127.0.0.1`:`3306`.
  // Please make sure to handle "name": "RecordsNotFound",

  if (name) error.name = name;

  console.error({ error });

  if (name === "UniqueConstraintViolation") {
    let [model, field] = meta?.target?.split("_");
    error.message = `
    ${req.t(model.toLowerCase())} ${req.t(field)} ${req.t(name)}`;
  } else if (name === "RecordsNotFound") {
    let [_, model, id] = req.url.split("/");
    error.message = `${req.t(model)} ${id} ${req.t("RecordsNotFound")}`;
  }

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  // if (meta?.target) readableError += " on : " + meta.target;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
};

// ---------------------------------------------------------------

const prismaErrorHandler = (
  error: any,
  req: Request,
  _res: Response,
  next: NextFunction
) => {
  const { code, meta, message: m2 } = error;
  error.status = 400;

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  prettyViolationErrorMessage(error, req);
  // readableError = extractPrismaMissingArguments(error, readableError);

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  next(error);
};

// ------------------------------------------------

export default prismaErrorHandler;
