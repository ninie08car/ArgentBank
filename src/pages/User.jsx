import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import Header from "../components/Header/Header";
import Accounts from "../components/Accounts/Accounts";

function User() {
  return (
    <div>
      <Navbar isLogged={true} />
      <main className="main bg-dark">
        <Header />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default User;
