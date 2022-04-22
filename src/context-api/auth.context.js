import React, { useState } from 'react'
export const AuthContext = React.createContext({
    authState: {
        user_details: {
        },
        is_authenticated: false
    },
    setAuthState: () => { }
});

const AuthContextProvider = ({ children }) => {
    const [authState, setAuthState] = useState({
        user_details: {
        },
        is_authenticated: false
    })
    console.log(authState, "authState")
    return (
        <AuthContext.Provider value={{
            authState, setAuthState: (values) => {
                setAuthState((prevValues) => {
                    return { ...prevValues, ...values }
                })
            },
        }}>
            {children}
        </AuthContext.Provider >)

}
export default AuthContextProvider