import { authApi } from "../../api/auth";

export const checkFx = async () => {
  try {
    return await authApi.check();
  } catch (error) {
    console.error("Check failed:", error);
    throw error;
  }
};

export const loginFx = async (credentials) => {
  try {
    return await authApi.login(credentials);
  } catch (error) {
    console.error("Login failed:", error);
    throw error;
  }
};

export const logoutFx = async () => {
  try {
    return await authApi.logout();
  } catch (error) {
    console.error("Logout failed:", error);
    throw error;
  }
};
