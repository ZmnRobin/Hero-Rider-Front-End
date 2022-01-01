import './App.css';
import Home from './Components/Home/Home';
import { Routes, Route} from "react-router-dom";
import Admin from './Components/Admin/Admin';
import SignUpAs from './Components/SignUp/SignUpAs';
import RiderForm from './Components/RiderForm/RiderForm';
import LearnerForm from './Components/LearnerForm/LearnerForm';
import RiderProfile from './Components/RiderForm/RiderProfile';
import { createContext, useState } from 'react';
import Plan from './Components/Plan/Plan';
import Login from './Components/Login/Login';
export const UserContext=createContext();


function App() {
  const [user,setUser]=useState({});
  console.log(user);
  return (
    <div>
      <UserContext.Provider value={[user,setUser]}>
      <Routes>
        <Route path="/" element={<Home/>}/>
        <Route path="/admin" element={<Admin/>}/>
        <Route path="/signUpAs" element={<SignUpAs/>}/>
        <Route path="/riderForm" element={<RiderForm/>}/>
        <Route path="/learnerForm" element={<LearnerForm/>}/>
        <Route path="/riderProfile/:email" element={<RiderProfile/>}/>
        <Route path="/plan" element={<Plan/>}/>
        <Route path="/login" element={<Login/>}/>
      </Routes>
      </UserContext.Provider>
    </div>
  );
}
export default App;
