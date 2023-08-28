import React from "react";
import { UserContext } from "../../UserContext";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ children }) {
  const { logedIn } = React.useContext(UserContext);
  if (logedIn === true) {
    return children;
  } else if (logedIn === false) {
    return <Navigate to="/login" />;
  } else {
    return <></>;
  }
}

export default ProtectedRoute;
