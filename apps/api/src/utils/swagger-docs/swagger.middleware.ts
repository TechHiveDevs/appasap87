import swaggerJsDoc from "swagger-jsdoc";
import swaggerUi from "swagger-ui-express";
import { configs } from "../configs/configs";

// ------------------------------------------------------

const url = `${process.env.DOMAIN}${process.env.PORT}`;

// ------------------------------------------------------

const swaggerOptions = {
  swaggerDefinition: {
    openapi: "3.0.0",
    components: {},
    info: {
      version: "1.0.0",
      title: configs.projectName,
      description: `${configs.projectName} API Information and description`,
      contact: {
        name: "just Mario",
        email: "mario3monir@gmail.com",
      },
      host: "petstore.swagger.io",
      basePath: "/v2",
      servers: [url],
    },
  },
  apis: ["./src/utils/swagger-docs/swagger.doc.yml"],
};

// ------------------------------------------------------

const swaggerDocs = swaggerJsDoc(swaggerOptions);

// ------------------------------------------------------

const swagger = {
  server: swaggerUi.serve,
  setup: swaggerUi.setup(swaggerDocs),
};

// ------------------------------------------------------

export default swagger;
