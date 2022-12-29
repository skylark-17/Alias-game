import React, { useContext, useState } from 'react'
import validator from 'validator';
import AuthContext from '../context/AuthContext';

import './LoginPage/LoginPage.css'
import Button from './UI/Button/Button';


function Register() {

    const {signupUser} = useContext(AuthContext)

    const [register, setRegister] = useState(() => {
        return {
            username: "",
            email: "",
            password: "",
            password2: "",
        }
    })

    const changeInputRegister = event => {
        setRegister(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }

    const submitChackin = event => {
        if (register.password !== register.password2) {
            alert("Repeated password incorrectly")
        } else if (!validator.isStrongPassword(register.password, { minSymbols: 0 })) {
            alert("Password must consist of one lowercase, uppercase letter and number, at least 8 characters")
        } else {
            signupUser(event)
        }
    }

    return (
        <div className="main">
            <form className='form_wrapper' onSubmit={submitChackin}>
                <p className='form_title'>Зарегистрироваться</p>
                <div>
                    <p className='form_label'>Логин</p>
                    <input 
                        type="username"
                        id="username"
                        name="username"
                        value={register.username}
                        onChange={changeInputRegister} 
                        className='input'></input>
                </div>

                <div>
                    <p className='form_label'>Электронная почта</p>
                    <input 
                        type="email"
                        id="email"
                        name="email"
                        value={register.email}
                        onChange={changeInputRegister}
                        className='input'></input>
                </div>

                <div>
                    <p className='form_label'>Пароль</p>
                    <input 
                        type="password"
                        id="password"
                        name="password"
                        value={register.password}
                        onChange={changeInputRegister}
                        className='input'></input>
                </div>


                <div>
                    <p className='form_label'>Повторите пароль</p>
                    <input
                        type="password"
                        id="password2"
                        name="password2"
                        value={register.password2}
                        onChange={changeInputRegister} 
                        className='input'></input>
                </div>
                <Button title ={'Зарегистрироваться'} func = {() => 1} />
            </form>
            <div>
                <label className='form_label'>Уже зарегистрированы?</label>
                <Button title={'Войти'} func = {() => {window.location.href='/login';}}></Button>
            </div>
        </div>   
    )
    
}

export default Register;