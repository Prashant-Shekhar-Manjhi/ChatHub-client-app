import Home from "./pages/home/Home";
import Login from "./pages/login/Login";
import Profile from "./pages/profile/Profile";
import Register from "./pages/register/Register";
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
      </Routes>
   </Router>
  );
}

export default App;
