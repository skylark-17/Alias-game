import './Navigation.css'
import Home from '../Home';
import LoginPage from '../LoginPage/LoginPage';
import Register from '../Register';
import Profile from '../Profile/Profile';
import AddWish from '../AddWish.js';
import { useContext } from 'react';
import AuthContext from '../../context/AuthContext';

export const all_pages = [
    {id:1, title:"На главную", href:"/", element:<Home/>},
    {id:2, title:"Добавить желание", href:"/addwish", element:<AddWish />},
    {id:3, title:"Мои желания", href:"/profile", element:<Profile />},
    {id:4, title:"Вход", href:"/login", element:<LoginPage/>},
    {id:5, title:"Регистрация", href:"/register", element:<Register />},
]

function Navigation() {

    const {logoutUser, username} = useContext(AuthContext)

    return (
        <nav className='navigation_wrapper'>
            {all_pages.map(elem => 
            (username == null && elem.title == 'Мои желания') ? null :
            (username == null && elem.title == 'Добавить желание') ? null :
            (elem.title == 'Вход' || elem.title == 'Регистрация') ? null :
            <a className='navigation_button' key={elem.id} href={elem.href}>{elem.title}</a>
            )}
            {
            (username != null) ? 
            <div className='navigation_button' onClick={logoutUser}>Выйти</div> :
            <div className='navigation_button'>
                <a href="/login" className='login_register_text'>Вход</a>
                <div>/</div>
                <a href='/register' className='login_register_text'>Регистрация</a>
            </div>
            }   
        </nav>
    )
}

export default Navigation;