import NavBarUser from "../components/NavBarUser/NavBarUser";
import EditUserForm from "../components/EditUserForm/EditUserForm";
import Accounts from "../components/Accounts/Accounts";
import Footer from "../components/Footer/Footer";

function EditUserName() {
  return (
    <div>
      <NavBarUser />
      <main>
        <EditUserForm />
        <Accounts />
      </main>
      <Footer />
    </div>
  );
}

export default EditUserName;
