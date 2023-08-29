import React from "react";
import { NavLink, useNavigate } from "react-router-dom";
import { UserContext } from "../../UserContext";
import { ReactComponent as FeedSvg } from "../../Assets/feed.svg";
import { ReactComponent as EstatisticasSvg } from "../../Assets/estatisticas.svg";
import { ReactComponent as AdicionarSvg } from "../../Assets/adicionar.svg";
import { ReactComponent as SairSgv } from "../../Assets/sair.svg";

import styles from "./UserNavHeader.module.css";
import useMedia from "../../Hooks/useMedia";

function UserNavHeader() {
  const { userLogout } = React.useContext(UserContext);
  const navigate = useNavigate();

  const mobileState = useMedia("(max-width: 40rem)");
  console.log(mobileState);

  function handleLogout() {
    userLogout();
    navigate("/login");
  }

  return (
    <nav className={styles.nav}>
      <NavLink to="/conta" end>
        <FeedSvg /> {mobileState && "Minhas Fotos"}
      </NavLink>
      <NavLink to="/conta/estatisticas">
        <EstatisticasSvg /> {mobileState && "Estatísticas"}
      </NavLink>
      <NavLink to="/conta/postar">
        <AdicionarSvg />
        {mobileState && "Adicionar Fotos"}
      </NavLink>
      <button onClick={handleLogout}>
        <SairSgv />
        {mobileState && "Sair"}
      </button>
    </nav>
  );
}

export default UserNavHeader;
