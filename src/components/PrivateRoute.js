import { Route } from "react-router-dom";
import { Navigate } from "react-router-dom";
import { useState } from "react";

const PrivateRoute = ({ Component }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(true);

  // Your authentication logic goes here...

  return isAuthenticated ? Component : <Navigate to="/" />;
};
export default PrivateRoute;
