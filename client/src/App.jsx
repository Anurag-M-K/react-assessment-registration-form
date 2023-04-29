import RegistrationForm from "./components/registrationForm/RegistrationForm";
import { BrowserRouter , Routes , Route}  from 'react-router-dom';
import UsersDataTable from "./components/usersDataTable/UsersDataTable";

function App() {
  return (
    <>
    <BrowserRouter>
    <Routes>
      <Route path="/" element={ <RegistrationForm />} />
      <Route path="/user-table" element={ <UsersDataTable />} />
    </Routes>
    </BrowserRouter>
    </>
  );
}

export default App;
