import React from "react";
import Feed from "./Feed/Feed";
import LoadingAnimation from "./Helpers/LoadingAnimation";

function Home() {
  return (
    <section className="container mainContainer">
      <Feed />
      {/* <LoadingAnimation /> */}
    </section>
  );
}

export default Home;
