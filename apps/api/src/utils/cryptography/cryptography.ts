/**
 * This Module for cryptography
 *
 * Data Encryption : encrypt with public key , decrypt with private key
 *
 * Verify Identities : encrypt with private key , decrypt with public key
 *
 * Digital Siganature : sign the message
 *
 */

import crypto from "crypto";
import fs from "fs";
const keysPath = __dirname + "/keys";
const { hash } = require("./hashing");

/* Public and Private keys if exists */
const getPublicKey = () => fs.readFileSync(keysPath + "/id_rsa_public.pem");
const getPrivateKey = () => fs.readFileSync(keysPath + "/id_rsa_private.pem");

// ==================================================================

// Data Encryption
const encryptWithPublicKey = (json: Object) =>
  crypto
    .publicEncrypt(getPublicKey(), JSON.stringify(json) as any)
    .toString("base64url");

const decryptWithPrivateKey = (message: string) =>
  JSON.parse(
    crypto
      .privateDecrypt(getPrivateKey(), Buffer.from(message, "base64url"))
      .toString()
  );

// ==================================================================

// Verify Identities
const encryptWithPrivateKey = (message: any) =>
  crypto.privateEncrypt(getPrivateKey(), message);

const decryptWithPublicKey = (message: any) =>
  crypto.publicDecrypt(getPublicKey(), message).toString();

// ==================================================================

// Digital Signature
const sign = async (message: any) => {
  const hashedMessage = await hash(message);
  const digitalSignature = encryptWithPrivateKey(hashedMessage);
  return {
    algorithm: "sha256", // should be in env file
    message,
    digitalSignature,
  };
};

module.exports = {
  encryptWithPublicKey,
  encryptWithPrivateKey,
  decryptWithPublicKey,
  decryptWithPrivateKey,
  sign,
};
