import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Register from './components/SignIn/Register';
import Profile from './components/SignIn/Profile'
import VerifyEmail from './components/SignIn/VerifyEmail';
import Login from './components/SignIn/Login'
import { auth } from './conf/fireconf';
import {onAuthStateChanged, TwitterAuthProvider} from 'firebase/auth'
import PrivateRoute from './components/SignIn/PrivateRoute'
import {AuthProvider} from './components/SignIn/AuthContext'
import {Navigate} from 'react-router-dom'
import ForgotPassword from './components/SignIn/Forgot_Password';
import TWOFA from './components/SignIn/TWOFA';


function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
    
   <div data-testid="app">
     <Router>
      <AuthProvider value={{currentUser, timeActive, setTimeActive}}>
        <Routes>
          <Route exact path='/' element={
            <PrivateRoute>
              <Profile/>
            </PrivateRoute>
          }/>
          <Route path="/login" element={
            !currentUser?.emailVerified 
            ? <Login/>
            : <Navigate to='/' replace/>
          } />
          <Route path="/register" element={
            !currentUser?.emailVerified 
            ? <Register/>
            : <Navigate to='/' replace/>
          } />
          <Route path='/forgot_password' element={
          !currentUser?.emailVerified
          ?<ForgotPassword/>
          :<Navigate to='/' replace/>}
           />
          <Route path='/verify-email' element={<VerifyEmail/>} /> 
          <Route path='/security' element ={<TWOFA/>}/>
        </Routes>  
      </AuthProvider>
  </Router>
   </div>
    
  );
}

export default App;
