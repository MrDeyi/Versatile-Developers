import './App.css';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import {useState, useEffect} from 'react'
import Register from './components/Register';
import Profile from './components/Profile'
import VerifyEmail from './components/VerifyEmail';
import Login from './components/Login'
import { auth } from './conf/fireconf';
import {onAuthStateChanged} from 'firebase/auth'
import PrivateRoute from './components/PrivateRoute'
import {AuthProvider} from './components/AuthContext'
import {Navigate} from 'react-router-dom'
import ForgotPassword from './components/Forgot_Password';

function App() {

  const [currentUser, setCurrentUser] = useState(null)
  const [timeActive, setTimeActive] = useState(false)

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      setCurrentUser(user)
    })
  }, [])

  return (
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
        </Routes>  
      </AuthProvider>
  </Router>
  );
}

export default App;
