import React, { useState } from 'react'
import validator from 'validator';


function Register() {

    const [register, setRegister] = useState(() => {
        return {
            username: "",
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
            // TODO: ask server to register user
            if (false) {

            } else {
                alert("You have succesfuly registered")
            }
        }
    }

    return (
        <div className="form">
            <h2>Регистрация:</h2>
            <form onSubmit={submitChackin}>
                <p>Логин: <input
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputRegister}
                /></p>
                <p>Пароль: <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputRegister}
                /></p>
                <p>Повторите пароль: <input
                    type="password"
                    id="password2"
                    name="password2"
                    value={register.password2}
                    onChange={changeInputRegister}
                /></p>
                <input type="submit" value="Отправить" />
            </form>
            <div>
                Уже зарегистрированы?
                <a href="/login">Войти</a>
            </div>
        </div>
    )
}

export default Register;