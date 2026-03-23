import Header from "../components/Header/Header";
import Footer from "../components/Footer/Footer";
import SignInContent from "../components/SignInContent/SignInContent";

function SignIn() {
  return (
    <div>
      <Header />
      <main>
        <SignInContent />
      </main>
      <Footer />
    </div>
  );
}

export default SignIn;
