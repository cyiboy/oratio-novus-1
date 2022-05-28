import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgetPassword';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/sign-up" element={<SignUp />}/>
        <Route exact path="/sign-in" element={<SignIn />}/>
        <Route exact path="/forget-password" element={<ForgotPassword />}/>
      </Routes>
    </>
  );
}

export default App;
