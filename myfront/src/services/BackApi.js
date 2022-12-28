import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import jwt_decode from "jwt-decode"

const baseUrl = 'http://127.0.0.1:8000/api/'


export const GetNicknames = () => {

    fetch(baseUrl +'nicknames/get_all')
    .then((response) => {
        return response.json();
    })
    .then((data) => {
        console.log(data);
    })

    let ress = fetch(baseUrl +'auth_api/token',{
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify({username: "admin", password: "VeryStrong123"})
    })
    console.log(ress)

    let res = fetch(baseUrl +'nicknames/get_all',{})
    console.log(res)
    const authTokens = JSON.parse(localStorage.getItem('authTokens'))
    // console.log(authTokens)
    fetch(baseUrl+'nicknames/get_all', {
        // mode: 'no-cors',
        // headers: {
        //     'Authorization' : `Bearer ${authTokens.access}`}
}).then(res => res.json()).then(data => console.log(data))
}

export const drop = (id) => {
    fetch(baseUrl+'nicknames/drop/'+id, 
    {
        method: 'DELETE',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        }
    })
}

export const create = (data) => {
    fetch(baseUrl+'nicknames/create/', 
    {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8'
        },
        body: JSON.stringify(data)
    })
}



export const getDebts = (data) => {
    return fetch('http://127.0.0.1:8000/api/get_debts_by_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.data)
    })
    .then(res => res.json())
}

export const createDebt = (data) => {
    return fetch('http://127.0.0.1:8000/api/create_debt', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.data)
    })
    .then(res => res.json())
}

export const clearDebts = (data) => {
    return fetch('http://127.0.0.1:8000/api/clear_debts', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
    })
    .then(res => res.json())
}

export const getDebtors = (data) => {
    return fetch('http://127.0.0.1:8000/api/get_debtors', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.data)
    })
    .then(res => res.json())
}
