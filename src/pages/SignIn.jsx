import NavBar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SignInForm/SignInForm";

function SignIn() {
  return (
    <div>
      <NavBar />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
