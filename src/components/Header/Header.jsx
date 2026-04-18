import "./Header.css";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Header() {
  const { firstName, lastName } = useSelector((state) => state.profile);
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        {firstName || "FirstName"}{" "}
        {lastName || "LastName"}
      </h1>
      <Link className="edit-button" to="/edit-user-name">
        Edit Name
      </Link>
    </div>
  );
}
