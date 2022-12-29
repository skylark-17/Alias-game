import React, { useContext, useState } from 'react'
import AuthContext from '../context/AuthContext';
import { createWish } from '../services/BackApi';

import './LoginPage/LoginPage.css'
import Button from './UI/Button/Button';


function AddWish() {
    const {authTokens, username} = useContext(AuthContext)

    const [data, setWish] = useState(() => {
        return {
            title: "",
            text: "",
            nickname: "",
        }
    })

    const changeInputWish = event => {
        setWish(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = event => {
        const token = authTokens?.access
        data.nickname = username
        createWish({token, data})
        window.location.href='/profile'
    }

    return (
        <div className="main">
            <p className='form_title'>Добавить желание</p>
            <form className='form_wrapper' onSubmit={submitChackin}>
                <div>
                    <p className='form_label'>Название</p>
                    <input 
                        type="title"
                        id="title"
                        name="title"
                        value={data.title}
                        onChange={changeInputWish} 
                        className='input'></input>
                </div>

                <div>
                    <p className='form_label'>Описание</p>
                    <textarea 
                        type="text"
                        id="text"
                        name="text"
                        value={data.text}
                        onChange={changeInputWish}
                        className='input'></textarea>
                </div>
                <Button title ={'Добавить'} func = {() => 1} />
            </form>
        </div>   
    )
}

export default AddWish;