import NavBar from "../components/NavBar/NavBar";
import EditUserForm from "../components/EditUserForm/EditUserForm";
import Accounts from "../components/Accounts/Accounts";
import Footer from "../components/Footer/Footer";

function EditUserName() {
  return (
    <div>
      <NavBar isLogged={true} />
      <main>
        <EditUserForm />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default EditUserName;
