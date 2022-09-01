/*
 create a useContext API so that other
 components can have access
 to our user details if they need them.
*/
import React, {useContext} from 'react'

const AuthContext = React.createContext()

/*
 This function allow us to share the value of the state.
*/
export function AuthProvider({children, value}) {
  return (
    <AuthContext.Provider value={value}>
      {children}
    </AuthContext.Provider>
  )
}

/* 
 This function allows us to easily have an access to the value
 passed in the above function.
*/
export function useAuthValue(){
  return useContext(AuthContext)
}