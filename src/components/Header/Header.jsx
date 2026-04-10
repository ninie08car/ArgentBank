import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { user } = useSelector((state) => state.login);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {user ? user.firstName : "FirstName"}{" "}
        {user ? user.lastName : "LastName"}
      </h1>
      <Link className="edit-button" to="/edit-user-name">
        Edit Name
      </Link>
    </div>
  );
}
