import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SignInForm from "../components/SignInForm/SignInForm.jsx";

function SignIn() {
  return (
    <div>
      <NavBar />
      <main>
        <SignInForm />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
