import { createContext, useState, useEffect } from "react"
const AuthContext = createContext()

const baseUrl = 'http://62.84.119.183:8000/api/'

export default AuthContext

export const AuthProvider = ({children}) => {
    let [username, setUsername] = useState()

    let [authTokens, setAuthTokens] = useState()

    authTokens = localStorage.getItem('authTokens') ? JSON.parse(localStorage.getItem('authTokens')) : null;

    username = localStorage.getItem('username') ? localStorage.getItem('username') : null;

    const loginUser = async (e) => {
        e.preventDefault()

        let res = await fetch(baseUrl + 'auth_api/token',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({username: e.target.username.value, password: e.target.password.value})
        })
        
        let data = await res.json()

        if (res.status === 200){
            setUsername(e.target.username.value)
            setAuthTokens(data)

            localStorage.setItem('authTokens', JSON.stringify(data))
            localStorage.setItem('username', e.target.username.value)

            window.location.href='/'
        } else {
            alert("error")
        }
    }

    const signupUser = async (e) => {
        e.preventDefault()

        let res = await fetch(baseUrl + 'api/auth_api/signup',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({username: e.target.username.value, password: e.target.password.value, email: e.target.email.value})
        })

        let data = await res.json()

        if (res.status === 200){
            setUsername(e.target.username.value)
            setAuthTokens(data)

            localStorage.setItem('authTokens', JSON.stringify(data))
            localStorage.setItem('username', e.target.username.value)

            window.location.href='/'
        } else {
            alert("error")
        }
    }

    const logoutUser = () => {
        setUsername(null)
        setAuthTokens(null)

        localStorage.removeItem('authTokens')
        localStorage.removeItem('username')
    }

    let updateToken = async ()=> {
        let refresh = authTokens?.refresh

        let res = await fetch(baseUrl + 'api/auth_api/refresh',{
            method: 'POST',
            headers: {
                'Content-Type': 'application/json;charset=utf-8'
            },
            body: JSON.stringify({refresh: refresh})
        })

        let data = await res.json()

        if (res.status === 200){
            setAuthTokens({...data, refresh: refresh})

            localStorage.setItem('authTokens', JSON.stringify({...data, refresh: refresh}))
        } else {
            logoutUser()
        }
        
    }

    let contextData = {
        username: username,
        authTokens: authTokens,

        signupUser: signupUser,
        loginUser: loginUser,
        logoutUser: logoutUser,
    }

    useEffect(()=> {
        let oneMinute = 1000 * 60

        let interval =  setInterval(()=> {
            if(authTokens){
                updateToken()
            }
        }, oneMinute)
        
        return ()=> clearInterval(interval)

    }, [authTokens])


    return (
    <AuthContext.Provider value={contextData} >
        {children}
    </AuthContext.Provider>
    )
}

