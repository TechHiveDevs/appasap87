import { myErrors, myErrorsTypes } from "./myErrors";

// ---------------------------------------------------------

export const Error = (
  type: myErrorsTypes = "InternalServerError",
  message = ""
) => {
  throw {
    name: type,
    status: myErrors[type],
    message: message || type,
  };
};
