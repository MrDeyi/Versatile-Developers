
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Register from './components/SignIn/Register';
import Profile from './components/SignIn/Profile'
import VerifyEmail from './components/SignIn/VerifyEmail';
import Login from './components/SignIn/Login'
import { auth } from './conf/fireconf';
import {onAuthStateChanged, TwitterAuthProvider} from 'firebase/auth'
import PrivateRoute from './components/SignIn/PrivateRoute'
// import {AuthProvider} from './components/SignIn/AuthContext'
import {Navigate} from 'react-router-dom'
import ForgotPassword from './components/SignIn/Forgot_Password';
import TWOFA from './components/SignIn/TWOFA';
import UpdateProfile from './components/SignIn/UpdateProfile';
import ViewProfile from './components/SignIn/ViewProfile';
// import "./style.scss";
import { useContext } from "react";
import { AuthContext } from "./context/AuthContext";

function App() {

  const { currentUser } = useContext(AuthContext);

  const ProtectedRoute = ({ children }) => {
    if (!currentUser) {
      return <Navigate to="/login" />;
    }

    return children
  };

  return (
    
     <Router>
        <Routes>
        <Route path="/">
          <Route
            index
            element={
              <ProtectedRoute>
                <Profile />
              </ProtectedRoute>
            }
          />
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
          <Route path='/update' element ={<UpdateProfile/>}/>
          <Route path='/viewupdate' element ={<ViewProfile/>}/>
        </Route>
        </Routes>  
  </Router>
    
  );
}

export default App;
