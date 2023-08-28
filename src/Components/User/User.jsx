import React from "react";
import { UserContext } from "../../UserContext";

function User() {
  const { userData } = React.useContext(UserContext);
  return (
    <div>
      <h1 style={{ textTransform: "capitalize" }}>{userData?.nome}</h1>
    </div>
  );
}

export default User;
