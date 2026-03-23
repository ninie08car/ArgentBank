import Header from "../components/Header/Header";
import UserHeader from "../components/UserHeader/UserHeader";
import Accounts from "../components/Accounts/Accounts";
import Footer from "../components/Footer/Footer";

function User() {
  return (
    <div>
      <Header />
      <main>
        <UserHeader />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default User;
