import argentBankLogo from "../../assets/img/argentBankLogo.png";
import { Link, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import { logoutReducer } from "../../redux/slices/loginSlice";
import { clearProfile } from "../../redux/slices/profileSlice";
import "./NavBar.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function NavBar() {
  const { token } = useSelector((state) => state.login);
  const { userName } = useSelector((state) => state.profile);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const isLogged = token && token.length > 1;
  const handleLogout = () => {
    dispatch(logoutReducer());
    dispatch(clearProfile());
    navigate("/");
  };

  return (
    <nav className="main-nav">
      <Link className="main-nav-logo" to="/">
        <img
          className="main-nav-logo-image"
          src={argentBankLogo}
          alt="Argent Bank Logo"
        />
        <h1 className="sr-only">Argent Bank</h1>
      </Link>

      <div>
        {isLogged ? (
          <>
            <Link className="main-nav-item" to="/user">
              <i className="fa fa-user-circle"></i>
              {userName || "User"}
            </Link>
            <Link className="main-nav-item" to="/" onClick={handleLogout}>
              <i className="fa fa-sign-out"></i>
              Sign Out
            </Link>
          </>
        ) : (
          <Link className="main-nav-item" to="/sign-in">
            <i className="fa fa-user-circle"></i>
            Sign In
          </Link>
        )}
      </div>
    </nav>
  );
}

export default NavBar;
