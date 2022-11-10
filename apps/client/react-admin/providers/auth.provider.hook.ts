import config from "../../config";

// =====================================================================

const authUrls = {
  login: config?.baseUrl + "/oauth/login",
  register: config?.baseUrl + "/oauth/register",
  me: config?.baseUrl + "/oauth/me",
};

// =====================================================================

const queryAuth = async (
  url: any,
  payload = {},
  method = "POST",
  headers = {}
) => {
  const body = method !== "GET" ? { body: JSON.stringify(payload) } : {};
  const options = {
    method,
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
      ...headers,
    },
    ...body,
  };

  try {
    const rawResponse = await fetch(url, options);
    const data = await rawResponse.json();
    return data;
  } catch (e: any) {
    console.error(e.message);
    return e;
  }
};

// =====================================================================

const logMeOut = () => {
  localStorage.removeItem("user");
  localStorage.removeItem("accessToken");
  localStorage.removeItem("center");

  if (location.hash === "#/signup") return true;

  location.href = `${location.origin}/#/login`;
};

// =====================================================================

export default function UseAuthProvider() {
  const authProvider = {
    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // send username and password to the auth server and get back credentials
    login: async ({ username: email, password }: any) => {
      const data = await queryAuth(authUrls.login, { email, password });
      if (data?.accessToken && data?.user?.id) {
        localStorage.setItem("user", JSON.stringify(data?.user));
        localStorage.setItem("accessToken", data?.accessToken);
        return Promise.resolve();
      }
      return Promise.reject();
    },

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // when the dataProvider returns an error, check if this is an authentication error
    checkError: (error: any) => {
      console.error({ error });
      return Promise.resolve();
    },

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // when the user navigates, make sure that their credentials are still valid
    checkAuth: async (params: any) => {
      const token = localStorage.getItem("accessToken");

      if (!token) return logMeOut();

      const data = await queryAuth(authUrls.me, {}, "GET", {
        Authorization: `Bearer ${token}`,
      });

      if (data?.accessToken && data?.user?.id) {
        return Promise.resolve();
      }
      return logMeOut();
    },

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // remove local credentials and notify the auth server that the user logged out
    logout: () => {
      localStorage.removeItem("user");
      localStorage.removeItem("accessToken");
      return Promise.resolve();
    },

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // get the user's profile
    getIdentity: async () => Promise.resolve(),

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~

    // get the user permissions (optional)
    getPermissions: () => Promise.resolve(),

    // ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~ ~
  };

  return authProvider;
}
