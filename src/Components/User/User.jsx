import React from "react";
import { UserContext } from "../../UserContext";
import UserHeader from "./UserHeader";
import { Routes, Route } from "react-router-dom";
import Feed from "../Feed/Feed";
import UserNewPost from "./UserNewPost";
import UserStats from "./UserStats";
import NotFound from "../NotFound";

function User() {
  const { userData } = React.useContext(UserContext);
  return (
    <section className="container">
      {" "}
      <UserHeader />
      <Routes>
        <Route path="/" element={<Feed user={userData.id} />} />
        <Route path="postar" element={<UserNewPost />} />
        <Route path="estatisticas" element={<UserStats />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </section>
  );
}

export default User;
