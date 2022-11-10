import i18next from "i18next";
import i18nHttpMiddleware from "i18next-http-middleware";
import en from "./langs/en.json";
import ar from "./langs/ar.json";

// -----------------------------------------------

const i18Configs = {
  preload: ["en", "ar"],
  fallbackLng: "en",
  resources: {
    en: { translation: en },
    ar: { translation: ar },
  },
};

// -----------------------------------------------

i18next
  .use(i18nHttpMiddleware.LanguageDetector)
  .init(i18Configs)
  .then((t) => {});

// -----------------------------------------------

const i18nextMiddlware = i18nHttpMiddleware.handle(i18next, {
  //   ignoreRoutes: ["/foo"],
  // lookupHeader: "accept-language",
  // or
  // function(req, res, options, i18next) {
  //   /* return true to ignore */
  // },
});

// -----------------------------------------------

export default i18nextMiddlware;
