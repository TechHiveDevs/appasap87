require("dotenv").config("../../../.env");

import { PrismaClient } from "@prisma/client";
const prisma = new PrismaClient({ log: ["info", "query"] });

// ==========================================================

// Default password 12345
const defaultPassword =
  "pbkdf2:sha256:150000$eb677977$204a8e45b57abd97e11bea7c49d7fd223a32e8b2976c677e5b74e444bad16003";

// ==========================================================

/**
 * Create Admin / Regular User
 */

(async () => {
  try {
    await prisma.user.createMany({
      data: [
        {
          email: "admin@example.com",
          name: "MarioAdmin",
          password: defaultPassword,
          age: 22,
          // phone: "01201244555",
          // role: "Admin",
          permissions: "read:user,create:user,update:user,delete:user",
        },
        {
          email: "user@example.com",
          name: "MarioUser",
          password: defaultPassword,
          age: 32,
          // phone: "01201233555",
          // role: "Regular",
          permissions: "read:user,",
        },
      ],
    });
  } catch (error) {}
})();
