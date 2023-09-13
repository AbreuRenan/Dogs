import React from "react";
import Feed from "./Feed/Feed";
import Head from "./Helpers/Head";

function Home() {
  return (
    <section className="container mainContainer">
      <Head title="Home" description="Feed de Fotos da rede Dogs" />
      <Feed />
    </section>
  );
}

export default Home;
