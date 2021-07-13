import React,{ createContext, useState, useContext, useEffect } from 'react'

const AuthContext = createContext();

const AuthContextProvider = ({children}) => {
  const [auth, setAuth] = useState(false);

  useEffect(() => {
    if (JSON.parse(localStorage.getItem("auth"))){
      setAuth(true)
    }
  }, [])
  return (
    <AuthContext.Provider value={
      {
        auth, setAuth
      }
    }>
      {children}
    </AuthContext.Provider>
  )
}
export default AuthContextProvider

export const useAuthContext = () => useContext(AuthContext)
