import React from "react";
import { useParams } from "react-router-dom";
import Head from "../Helpers/Head";

import Feed from "../Feed/Feed";

function UserProfile() {
  const { user } = useParams();
  return (
    <section className="container mainContainer">
      <Head title={user} description="Página do meu perfil" />
      <h1 className="title">{user}</h1>
      <Feed user={user} />
    </section>
  );
}

export default UserProfile;
