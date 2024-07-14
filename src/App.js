import './App.css';
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import SignupForm from "./component/authentication/SignupForm";
import {UserProvider} from "./contexts/UserProvider";

function App() {
  return (
      <>
          <AuthenticationProvider>
              <UserProvider>
                  <SignupForm />
              </UserProvider>
          </AuthenticationProvider>

      </>


  );
}

export default App;
