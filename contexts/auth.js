import { createContext, useContext, useState } from "react"
import jwt from 'jsonwebtoken'    // npm i jsonwebtoken




const baseUrl = process.env.NEXT_PUBLIC_API_URL;
const tokenUrl = baseUrl+"api/token/";

const AuthContext = createContext();     //   1   create context , need import


// $$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$$

export function useAuth(){              // 4 create a function to use the context we created  
    const auth = useContext(AuthContext)
    if(!auth) {
        return("Error: auth is empty")
    }
    return auth;
}

// &&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&&

export function AuthProvider(props){

    //  3 create functions and logic for value that we want to shareit inside AuthProvider 


    const [state, setState] = useState({
        tokens: null,
        user: null,
        login,
        logout,
    })

    async function login(username, password){

        const options = {
            method : "POST",
            body: JSON.stringify({username,password}),
            headers : {'Content-Type' : 'application/json'}

        }

        const response = await fetch(tokenUrl,options)

        const data = await response.json()

        // console.log("data",data)

        const decodedAccess = jwt.decode(data.access)
        // console.log("decoded",decodedAccess)

        const newState = {
            tokens : data,
            user : {
                username : decodedAccess.username,
                email: decodedAccess.email,
                id: decodedAccess.user_id
            }
        }

        setState(prevState =>({...prevState, ...newState}));


    }

    function logout() {
        const newState = {
            tokens : null,
            user : null,
        }

        setState(prevState =>({...prevState, ...newState}));
    }

    return (
        <AuthContext.Provider value={state}>  {/* 2  create provider function then rap it to app.js  value will be share wit all component*/}
            {props.children}
        </AuthContext.Provider>
    )
}