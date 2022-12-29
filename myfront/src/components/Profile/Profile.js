import React, { useContext, useEffect, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { createWish, deleteWish, getWishesByUser } from '../../services/BackApi';

import '../LoginPage/LoginPage.css'
import Button from '../UI/Button/Button';
import './Profile.css'


function Profile() {
    const [update, SetUpdate] = useState(0)
    const {authTokens, username} = useContext(AuthContext)
    const [wishes, setWishes] = useState([])

    const [token, setToken] = useState(authTokens?.access)

    useEffect(() => {
        setToken(authTokens?.access)
    }, [authTokens])

    useEffect(() => {
        getWishesByUser({token, username}).then(res => {
            setWishes(res)
        })
    }, [authTokens, update])
    return (
        <div className='wish_grid'>
            {(wishes != null && wishes.length > 0) ? wishes.map(elem =>  
                <div className='wish' key={elem.id}> 
                    <div className='wish_title'>{elem.title}</div>
                    <div className='wish_text'>{elem.text}</div> 
                    <Button title='Удалить' func= {() => {deleteWish({token, id:elem.id}); SetUpdate(update + 1)}}></Button>
                </div> 
                ) : null}
        </div>
        // <div>{data}</div>
    )
}

export default Profile;