import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
import Messenger from "./pages/messenger/Messenger";
import ProfileSetting from "./pages/profileSetting/ProfileSetting";
import { Routes } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import {useContext} from "react"
import {
  BrowserRouter as Router,
  Route,Navigate
} from "react-router-dom";

function App() {
  const logedInUser =  useContext(AuthContext).user;
  return (
    <Router>
      <Routes>
        <Route exact path="/" element={ logedInUser ? <Home/> : <Login/>}/>
        <Route exact path="/profile/:userId" element={logedInUser ? <Profile/> : <Navigate to="/login"/>}/> 
        <Route exact path="/login" element={ logedInUser ? <Navigate to="/"/> : <Login/>}/>
        <Route exact path="/register" element={ logedInUser ? <Navigate to="/"/> : <Register/>}/> 
        <Route exact path="/messenger" element={ logedInUser ? <Messenger/> : <Navigate to="/login"/>}/> 
        <Route exact path="/settings" element={logedInUser ? <ProfileSetting/> : <Navigate to="/login"/>}/>     
      </Routes>
   </Router>
  );
}

export default App;
