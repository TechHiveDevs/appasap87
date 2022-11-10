import { Admin, Resource } from "react-admin";
import simpleRestProvider from "ra-data-simple-rest";
import entities from "../../entities/entites";
import config from "../../config";
import MyLayout from "./MyLayout";
import i18nProvider from "../../utils/translation/i18nProvider";

// ------------------------------------------------

const dataProvider = simpleRestProvider(config?.baseUrl);

// ------------------------------------------------

const MyAdmin = () => {
  return (
    <Admin
      dataProvider={dataProvider}
      layout={MyLayout}
      i18nProvider={i18nProvider}
    >
      {entities.map(({ label, ...reset }, index) => (
        // @ts-ignore
        <Resource key={index} option={{ label }} {...reset} />
      ))}
    </Admin>
  );
};

// ------------------------------------------------

export default MyAdmin;
