/**
 * Upload Media Module
 *
 * upload media for express server using multer,
 * this example shows how to upload only signle image
 *
 * @author MarioMonir
 */

// --------------------------------------------------------

import { Router, Request, Response } from "express";
import multer from "multer";
import fs from "fs";
import path from "path";
import { configs } from "../configs/configs";

// --------------------------------------------------------

const uploadRouter = Router();

// --------------------------------------------------------

const storage = multer.diskStorage({
  destination: (req: Request, file: Express.Multer.File, cb) => {
    /**
     *  Get what you want from req : as query string or body payload
     *  and use it's logic to store it
     *  override the file path according to your business logic
     */
    const { id } = req.query;
    const { entity = "" } = req.params;

    // Declare Paths
    const entityDirPath = path.join(__dirname, `../../../assets/${entity}`);
    const entityFilePath = `${entityDirPath}/${entity}_${id ? id : ""}`;
    const filePath = path.join(__dirname, entityFilePath);

    // Create Entity Dir if it doesn't exist'
    if (!fs.existsSync(entityDirPath)) fs.mkdirSync(entityDirPath);

    // @ts-ignore
    req.file = filePath;
    cb(null, filePath);
  },

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  filename: (req, file, cb) => {
    /**
     * override your file naming according to your business logic
     */
    // @ts-ignore
    req.file = cb(null, Date.now() + "_" + file.originalname);
  },
});

// --------------------------------------------------------

const uploadMiddleware = multer({ storage }).any();
//.single("avatar");

// --------------------------------------------------------

const uploadController = async (req: Request, res: Response) => {
  const { id = "" } = req.query;
  const { entity = "" } = req.params;

  // @ts-ignore
  const filePath = req?.files[0]?.filename;
  const entityPath = `/assets/${entity}/${entity}_${id ? id : ""}/${filePath}`;
  const url = `${configs.baseUrl}/${entityPath}`;

  res.status(202).json({ url });
};

// --------------------------------------------------------

uploadRouter.route("/api/upload").post(uploadMiddleware, uploadController);

// --------------------------------------------------------

uploadRouter
  .route("/api/upload/:entity")
  .post(uploadMiddleware, uploadController);

// --------------------------------------------------------
export default uploadRouter;
