import { Router } from "express";
import bodyParser from "body-parser";
import crudController from "../controller/crud.controller";
import validate from "../validator/validator.middleware";
import { CRUD } from "../types/crudController.types";

// ============================================================

/*
 * crud express router
 * params:
 *      path         : /resource  or /resource/:id
 *      orm          : orm crud operations as (prismaCrud)
 *      customRoutes : array of objects [{ method, path, controller }]
 *
 * return : express router
 */

// ============================================================

const crud = ({
  path,
  crudController: orm,
  customRoutesController = [],
}: CRUD) => {
  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  const router = Router();
  router.use(bodyParser.json());

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  /**
   *  /resource
   */
  router
    .route(path)
    .get(crudController.getList(orm.getList, orm.search))
    .post(validate(path), crudController.create(orm.create));

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  /**
   *  /resource/:id
   */
  router
    .route(`${path}/:id`)
    .get(validate(path), crudController.getOne(orm.getOne))
    .put(validate(path), crudController.update(orm.update))
    .delete(validate(path), crudController.destroy(orm.destroy));

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  /**
   * Custom 'Routes, Controllers' for Entity
   */
  customRoutesController?.forEach((custom: any) =>
    //@ts-ignore
    router.route(custom.path)[custom.method](custom.controller)
  );

  // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

  return router;
};

// ============================================================

export default crud;
