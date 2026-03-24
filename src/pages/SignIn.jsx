import NavBar from "../components/NavBar/NavBar";
import Footer from "../components/Footer/Footer";
import SignInContent from "../components/SignInContent/SignInContent";

function SignIn() {
  return (
    <div>
      <NavBar />
      <main>
        <SignInContent />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
