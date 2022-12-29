import { useState, useEffect, useContext } from 'react'
import AuthContext from '../context/AuthContext'
import { createWish, GetNicknames } from '../services/BackApi'

function Home() {
    const {authTokens} = useContext(AuthContext)
    const token = authTokens?.access
    const data={
        title:"kek",
        text:"lol",
        nickname:"Skylark"
    }
    return (
        <div>
            <button onClick={()=>createWish({token, data})}>123213</button>
            123
        </div>
    )
}

export default Home;