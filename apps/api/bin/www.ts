#!/usr/bin/env node

/**
 * Module dependencies.
 */

import dotenv from "dotenv";
import dotenvExpand from "dotenv-expand";
const env = dotenv.config();
dotenvExpand.expand(env);

// ----------------------------------------------------------------

import app from "../app";
import http from "http";
import debug from "debug";
import { configs } from "../src/utils/configs/configs";
import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient();

// ----------------------------------------------------------------

/**
 * Get port from environment and store in Express.
 */
const port = normalizePort(configs.port || "3000");
app.set("port", port);

// ----------------------------------------------------------------

/**
 * Create HTTP server.
 */
const server = http.createServer(app);

// ----------------------------------------------------------------

const connectDatabase = async () => {
  try {
    await prisma.$connect();
    console.log("Connected to database successfully");
  } catch (error: any) {
    console.error("Can't connect to database");
    console.error({ error });
  }
};

// ----------------------------------------------------------------

/**
 * Normalize a port into a number, string, or false.
 */
function normalizePort(val: string) {
  var port = parseInt(val, 10);

  if (isNaN(port)) {
    // named pipe
    return val;
  }

  if (port >= 0) {
    // port number
    return port;
  }

  return false;
}

// ----------------------------------------------------------------

/**
 * Event listener for HTTP server "error" event.
 */
function onError(error: any) {
  if (error.syscall !== "listen") {
    throw error;
  }

  var bind = typeof port === "string" ? "Pipe " + port : "Port " + port;

  // handle specific listen errors with friendly messages
  switch (error.code) {
    case "EACCES":
      console.error(bind + " requires elevated privileges");
      process.exit(1);
      break;
    case "EADDRINUSE":
      console.error(bind + " is already in use");
      process.exit(1);
      break;
    default:
      throw error;
  }
}

// ----------------------------------------------------------------

/**
 * Event listener for HTTP server "listening" event.
 */
function onListening() {
  const addr: any = server.address();
  const bind = typeof addr === "string" ? "pipe " + addr : "port " + addr.port;
  const url = `${process.env.DOMAIN}:${process.env.PORT}`;
  console.log(`Server is on fire at: ${url}`);
  debug("Listening on " + bind);
}

// ----------------------------------------------------------------

// Launch the Server
(async () => {
  await connectDatabase();
  server.listen(port);
  server.on("error", onError);
  server.on("listening", onListening);
})();
