/**
 *  Auth Service
 *  ----------
 *  this module aims to have the functions that
 *  calls the database from a single point (this file)
 *  and these functions are used in auth process as
 *
 *  orm used are prisma
 *
 * @author MarioMonir
 */

// ---------------------------------------------------------

import { hash, verifyHash } from "../../cryptography/hashing";
import jwt from "jsonwebtoken";
import { PrismaClient } from "@prisma/client";
import { Error } from "../../error/errors.utils";
import { configs } from "../../configs/configs";
// import { mailOTP, sendOTPMail } from "../../mail/mail.utils";

// ---------------------------------------------------------

const prisma = new PrismaClient();

// ---------------------------------------------------------

export const getUserById = async (id: number) => {
  // const user: any = await prisma.user.findUnique({
  //   where: { id },
  // });
  // if (!user) Error("NotFound", "user");
  // // if (!user?.active) Error("UserIsNotActive");
  // return user;
};

// ---------------------------------------------------------

const getUserByEmail = async (email: string) => {
  // const user: any = await prisma.user.findUnique({ where: { email } });
  // if (!user) Error("NotFound", "user");
  // // if (!user?.active) Error("UserIsNotActive");
  // return user;
};

// ---------------------------------------------------------

export const findOrCreateGithubUser = async (payload: any) => {
  // let user = await prisma.user.findFirst({
  //   // @ts-ignore
  //   where: { githubId: payload?.githubId },
  // });
  // if (!user) {
  //   user = await prisma.user.create({ data: payload });
  // }
  // return user;
};

// --------------------------------------------------------

export const findOrCreateGoogleUser = async (payload: any) => {
  // let user = await prisma.user.findFirst({
  //   // @ts-ignore
  //   where: { googleId: payload?.googleId },
  // });
  // if (!user) {
  //   user = await prisma.user.create({ data: payload });
  // }
  // return user;
};
// --------------------------------------------------------

/**
 * Register
 */
export const register = async (payload: any) => {
  /**
   *  Here to valiadtet and custom logic
   */
  // return await prisma.user.create({ data: payload });
};

// ---------------------------------------------------------

/**
 * Login
 */
export const login = async ({ email, password }: any) => {
  /**
   *  Here to validate the email and password
   */
  // const user: any = await getUserByEmail(email);
  // const isPasswordValid = verifyHash({ password, hashed: user.password });
  // if (!isPasswordValid) Error("InValidPassword");
  // const { jwtSecret, jwtExpires } = configs;
  // const accessToken = jwt.sign(user, jwtSecret, { expiresIn: jwtExpires });
  // delete user.password;
  // return { ...user, accessToken };
};

// ---------------------------------------------------------

export const resetPassword = async ({
  email,
  oldPassword,
  newPassword,
}: any) => {
  // validate email ,oldPassword , newPassword
  // const user: any = await getUserByEmail(email);
  // const isPasswordValid = verifyHash({
  //   password: oldPassword,
  //   hashed: user.password,
  // });
  // if (!isPasswordValid) Error("InValidPassword");
  // return await prisma.user.update({
  //   where: { email },
  //   data: { password: hash({ password: newPassword }) },
  // });
};

// ---------------------------------------------------------

/**
 * Soft Delete User
 */
export const softDelete = async (id: number) => {
  /**
   * Valiadte id
   */
  // return prisma.user.update({ where: { id }, data: { active: true } });
};

// --------------------------------------------------------

export const changePasswordOTP = async ({ email, password, otp }: any) => {
  const user = await getUserByEmail(email);

  // const user = await prisma.user.findUnique({ where: { email } });
  //   if (!user) return "notFound";
  //   if (user.deleted) return "deleted";
  //   const otpExpiresAt = new Date(user.otpExpiresAt);
  //   if (
  //     !verifyHash({ password: otp, hashed: user.otp }) ||
  //     Date.now() >= otpExpiresAt
  //   ) {
  //     return "invalidotp";
  //   }
  //   return await prisma.user.update({
  //     where: { email },
  //     data: { password: hash({ password }) },
  //   });
  // };
  // export const isThirdPartyUser: any = async ({ email, id, phone }) => {
  //   const user = email
  //     ? await prisma.user.findUnique({ where: { email } })
  //     : phone
  //     ? await prisma.user.findUnique({ where: { phone } })
  //     : await prisma.user.findUnique({ where: { id: parseInt(id) } });
  //   if (!user) return "notFound";
  //   if (user.deleted) return "deleted";
  //   if (user.googleId) return true;
  //   if (user.githubId) return true;
  //   if (!user.password) return true;
  // return false;
};

// export const findUserById = async ({ id }) => {
//   if (!id) return false;
//   return await prisma.user.findUnique({ where: { id } });
// };

// ---------------------------------------------------------

// export const findOrCreateGoogleUser = async (payload) => {
//   const { googleId }: any = payload;
//   let user: any = await prisma.user.findUnique({ where: { googleId } });

//   if (!user) {
//     user = await prisma.user.create({ data: payload });
//   }
//   return user;
// };

// ---------------------------------------------------------

// export const findOrCreateGithubUser = async (payload) => {
//   const { githubId }: any = payload;

//   let user = await prisma.user.findUnique({ where: { githubId } });

//   if (!user) {
//     user = await prisma.user.create({ data: payload });
//   }

//   return user;
// };

// ---------------------------------------------------------

export const updateUserPermission = async ({ id, permissions }: any) => {
  // let permissionsSet = [...new Set(permissions.trim().split(","))];
  // let newPermissions = permissionsSet.join(",");
  // return await prisma.user.update({
  //   where: { id },
  //   data: {
  //     // permissions: newPermissions,
  //   },
  // });
};
