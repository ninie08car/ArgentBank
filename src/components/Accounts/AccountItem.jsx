import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronRight } from "@fortawesome/free-solid-svg-icons";

const AccountItem = ({ title, amount, description }) => {
  return (
    <section className="account">
      <div className="account-content-wrapper">
        <h3 className="account-title">{title}</h3>
        <p className="account-amount">{amount}</p>
        <p className="account-amount-description">{description}</p>
      </div>

      <div className="account-content-wrapper cta">
        {/* <Link className="transaction-button" to="/transaction"> */}
        <FontAwesomeIcon
          icon={faChevronRight}
          className="fa-solid fa-chevron"
        />
        {/* </Link> */}
      </div>
    </section>
  );
};

export default AccountItem;
