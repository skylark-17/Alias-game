import React, { useContext, useState } from 'react'
import AuthContext from '../../context/AuthContext';
import { GetNicknames } from '../../services/BackApi';
import Button from '../UI/Button/Button';

import './LoginPage.css'


function LoginPage() {
    const {loginUser} = useContext(AuthContext)
    return(
        <div className='main'>
            <form className='form_wrapper' onSubmit={loginUser}>
                <div>
                    <p className='form_label'>Логин</p>
                    <input type='username' name='username' className='input'></input>
                </div>
                <div>
                    <p className='form_label'>Пароль</p>
                    <input className='input' type='password' name='password'></input>
                </div>
                <Button title ={'Войти'} func = {() => 1} />
            </form>
            <div>
                <label className='form_label'>Еще не зарегистрированы?</label>
                    <Button title={'Зарегистрироваться'} func = {() => {window.location.href='/register';}}></Button>
            </div>
         </div>
    )
}

export default LoginPage;