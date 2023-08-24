import React from "react";
import { TOKEN_POST, TOKEN_VALIDATE_POST, USER_GET } from "./api";
import { useNavigate } from "react-router-dom";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [userData, setUserData] = React.useState(null);
  const [logedIn, setLogedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  const navigate = useNavigate();

  React.useEffect(() => {
    async function autoLogin() {
      const localToken = window.localStorage.getItem("token");
      if (localToken) {
        try {
          setError(null);
          setLoading(true);
          const { url, options } = TOKEN_VALIDATE_POST(localToken);
          const response = await fetch(url, options);
          if (!response.ok) throw new Error("Token Inválido");
          await getUser(localToken);
        } catch (err) {
          userLogout();
        } finally {
          setLoading(false);
        }
      }
    }
    autoLogin();
  }, []);

  async function getUser(userToken) {
    const { url, options } = USER_GET(userToken);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setLogedIn(true);
    navigate("/conta");
  }

  async function userLogin(username, password) {
    try {
      setError(null);
      setLoading(true);
      const { url, options } = TOKEN_POST({ username, password });
      const tokenRes = await fetch(url, options);
      const json = await tokenRes.json();
      window.localStorage.setItem("token", json.token);
      if (!tokenRes.ok) throw new Error(`${json.message}`);
      await getUser(json.token);
    } catch (err) {
      setError(err.message);
      setLogedIn(false);
    } finally {
      setLoading(false);
    }
  }

  async function userLogout() {
    navigate("/login");
    setUserData(null);
    setError(null);
    setLoading(false);
    setLogedIn(false);
    window.localStorage.removeItem("token");
  }
  return (
    <UserContext.Provider
      value={{
        userLogin,
        userLogout,
        userData,
        loading,
        error,
        logedIn,
        setError,
      }}
    >
      {children}
    </UserContext.Provider>
  );
}
