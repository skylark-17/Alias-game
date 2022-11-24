import React, { useState } from 'react'


function Login() {

    const [register, setLogin] = useState(() => {
        return {
            username: "",
            password: "",
        }
    })

    const changeInputLogin = event => {
        setLogin(prev => {
            return {
                ...prev,
                [event.target.name]: event.target.value,
            }
        })
    }


    const submitChackin = event => {
        // TODO: ask server to log in user
        if (false) {
            alert("Нет пользователя с таким логином и паролем")
        } else {
            alert("Вы успешно зашли")
        }
    }

    return (
        <div className="form">
            <h2>Вход:</h2>
            <form onSubmit={submitChackin} >
                <p>Логин: <input
                    type="username"
                    id="username"
                    name="username"
                    value={register.username}
                    onChange={changeInputLogin}
                /></p>
                <p>Пароль: <input
                    type="password"
                    id="password"
                    name="password"
                    value={register.password}
                    onChange={changeInputLogin}
                /></p>
                <input type="submit" value="Отправить" />
            </form>
            <div>
                Еще не зарегистрированы?
                <a href="/register">Зарегистрироваться</a>
            </div>
        </div>
    )
}

export default Login;