import { Routes, Route } from 'react-router-dom';
import ForgotPassword from './pages/ForgetPassword';
import SignIn from './pages/SignIn'
import SignUp from './pages/SignUp'
import Home from './pages/Home'
import WordInfo from './pages/WordInfo';
import AddWord from './pages/AddWord';
import Profile from './pages/Profile';
// import Loader from './components/Loader';

function App() {
  return (
    <>
      <Routes>
        <Route exact path="/" element={<Home />}/>
        <Route exact path="/profile" element={<Profile />}/>
        <Route exact path="/sign-up" element={<SignUp />}/>
        <Route exact path="/sign-in" element={<SignIn />}/>
        <Route exact path="/add" element={<AddWord />}/>
        <Route exact path="/forget-password" element={<ForgotPassword />}/>
        <Route exact path="/word-info/:id" element={<WordInfo />}/>
      </Routes>
    </>
  );
}

export default App;
