import { useContext } from 'react'
import AuthContext from '../context/AuthContext'
import jwt_decode from "jwt-decode"

const baseUrl = 'http://127.0.0.1:8000/api/'


export const GetNicknames = (data) => {
    console.log(data.authTokens.access)

    fetch('http://127.0.0.1:8000/api/nicknames', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.authTokens.access}`
        }
    })
    .then(res => res.json())
    .then(res => console.log(res))

    // fetch(baseUrl +'nicknames')
    // .then((response) => {
    //     return response.json();
    // })
    // .then((data) => {
    //     console.log(data);
    // })

    // let ress = fetch(baseUrl +'auth_api/token',{
    //     method: 'POST',
    //     headers: {
    //         'Content-Type': 'application/json;charset=utf-8'
    //     },
    //     body: JSON.stringify({username: "admin", password: "VeryStrong123"})
    // })
    // console.log(ress)

//     let res = fetch(baseUrl +'nicknames/get_all',{})
//     console.log(res)
//     const authTokens = JSON.parse(localStorage.getItem('authTokens'))
//     // console.log(authTokens)
//     fetch(baseUrl+'nicknames/get_all', {
//         // mode: 'no-cors',
//         // headers: {
//         //     'Authorization' : `Bearer ${authTokens.access}`}
// }).then(res => res.json()).then(data => console.log(data))
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


export const createWish = (data) => {
    return fetch('http://127.0.0.1:8000/api/wishes/create', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.data)
    })
    .then(res => res.json)
}

export const getWishesByUser = (data) => {
    return fetch('http://127.0.0.1:8000/api/wishes/get_by_user', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.username)
    }).then(res => res.json())
}


export const deleteWish = (data) => {
    return fetch('http://127.0.0.1:8000/api/wishes/drop/', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json;charset=utf-8',
            'Authorization': `Bearer ${data.token}`
        },
        body: JSON.stringify(data.id)
    })
    .then(res => res.json())
}
