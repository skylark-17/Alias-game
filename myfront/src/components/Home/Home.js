import { useState, useEffect, useContext } from 'react'
import AuthContext from '../../context/AuthContext'
import { getWishesByUser } from '../../services/BackApi'
import Button from '../UI/Button/Button'

function Home() {
    const [user, setUser] = useState()

    const {authTokens} = useContext(AuthContext)

    const [wishes, setWishes] = useState([])

    const [token, setToken] = useState(authTokens?.access)

    useEffect(() => {
        setToken(authTokens?.access)
    }, [authTokens])

    const changeUser = event => {
        setUser(event.target.value)
    }

    const getWishes = event => {
        event.preventDefault()
        getWishesByUser({token, username:user}).then(res => {
            setWishes(res)
        })
    }

    return (
        <div>
            <div className='main'>
                <p className='form_title'>Найти список желаний</p>
                
                <form className='form_wrapper' onSubmit={getWishes}>
                    <div>
                        <p className='form_label'>Имя пользователя</p>
                        <input name='login' className='input' onChange={changeUser} ></input>
                    </div>
                    <Button title ={'Найти'} func = {() => 1} />
                </form>
            </div>

            <div className='wish_grid'>
                {(wishes != null && wishes.length > 0) ? wishes.map(elem =>  
                    <div className='wish' key={elem.id}> 
                        <div className='wish_title'>{elem.title}</div>
                        <div className='wish_text'>{elem.text}</div> 
                    </div> 
                    ) : null}
            </div>
        </div>
    )
}

export default Home;