import React from "react";
import { UserContext } from "../../UserContext";
import UserNavHeader from "./UserNavHeader";

import styles from "./UserHeader.module.css";
import { useLocation } from "react-router-dom";

function UserHeader() {
  const { userData } = React.useContext(UserContext);
  const [title, setTitle] = React.useState("");
  const location = useLocation();

  React.useEffect(() => {
    const { pathname } = location;
    switch (pathname) {
      case "/conta/postar":
        setTitle("Poste sua Foto");
        break;
      case "/conta/estatisticas":
        setTitle("Estatísticas");
        break;
      case "/conta":
        setTitle("Meu Feed");
        break;
      default:
        setTitle("Minha Conta");
        break;
    }
  }, [location]);
  return (
    <header className={styles.userHeader}>
      <h1 className="title">{title}</h1>
      <UserNavHeader />
    </header>
  );
}

export default UserHeader;
