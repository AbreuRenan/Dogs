import React, { Children } from "react";
import { TOKEN_POST, USER_GET } from "./api";

export const UserContext = React.createContext();

export function UserStorage({ children }) {
  const [userData, setUserData] = React.useState(null);
  const [logedIn, setLogedIn] = React.useState(false);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(false);

  async function getUser(userToken) {
    const { url, options } = USER_GET(userToken);
    const response = await fetch(url, options);
    const json = await response.json();
    setUserData(json);
    setLogedIn(true);
    console.log(json);
  }

  async function userLogin(username, password) {
    const { url, options } = TOKEN_POST({ username, password });
    const tokenRes = await fetch(url, options);
    const { token } = await tokenRes.json();
    window.localStorage.setItem("token", token);
    getUser(token);
  }

  return (
    <UserContext.Provider value={{ userLogin, userData }}>
      {children}
    </UserContext.Provider>
  );
}
