import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";

function ProtectedRoute({ element }) {
  const token = useSelector((state) => state.login.token);

  if (!token) {
    return <Navigate to="/sign-in" replace />;
  }

  return element;
}

export default ProtectedRoute;
