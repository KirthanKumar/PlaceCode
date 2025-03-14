import { useState, useEffect, createContext, useContext } from "react";
import { useNavigate } from "react-router-dom";
import { checkFx, loginFx, logoutFx } from "./effects";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);
  const [isAuth, setIsAuth] = useState(false);
  const [loginPending, setLoginPending] = useState(false);
  const [isLoading, setIsLoading] = useState(true);
  const navigate = useNavigate();

  const checkAuth = async () => {
    try {
      const response = await checkFx();
      setUser(response.payload);
      setIsAuth(true);
    } catch {
      navigate("/login");
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (credentials) => {
    setLoginPending(true);
    try {
      const response = await loginFx(credentials);
      setUser(response.payload);
      setIsAuth(true);
      navigate("/");
    } catch {
      console.error("Login failed");
    } finally {
      setLoginPending(false);
    }
  };

  const logout = async () => {
    try {
      await logoutFx();
      setUser(null);
      setIsAuth(false);
      navigate("/login");
    } catch {
      console.error("Logout failed");
    }
  };

  useEffect(() => {
    checkAuth();
  }, []);

  return (
    <AuthContext.Provider
      value={{ user, isAuth, login, logout, loginPending, isLoading }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
