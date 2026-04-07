import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Accounts from "../components/Accounts/Accounts";

function User() {
  return (
    <div>
      <NavBar isLogged={true} />
      <main className="main bg-dark">
        <Header />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default User;
