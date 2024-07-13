import './App.css';
import SigninForm from "./component/authentication/SigninForm";
import {AuthenticationProvider} from "./contexts/AuthenticationProvider";
import SignupForm from "./component/authentication/SignupForm";

function App() {
  return (
      <>
          <AuthenticationProvider>
              <SignupForm />
          </AuthenticationProvider>

      </>


  );
}

export default App;
