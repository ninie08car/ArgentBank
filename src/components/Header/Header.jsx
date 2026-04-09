import "./Header.css";
import { Link } from "react-router-dom";

export default function Header() {
  return (
    <div className="header">
      <h1>
        Welcome back
        <br />
        Tony Jarvis!
      </h1>
      <Link className="edit-button" to="/edit-user-name">
        Edit Name
      </Link>
    </div>
  );
}
