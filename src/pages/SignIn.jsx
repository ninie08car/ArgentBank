import Navbar from "../components/Navbar/Navbar";
import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SignInForm/SignInForm";

function SignIn() {
  return (
    <div>
      <Navbar />
      <main className="main bg-dark">
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
