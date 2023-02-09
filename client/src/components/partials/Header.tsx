import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { toast } from 'react-toastify'
import { useAppDispatch, useAppSelector } from '../../hooks/Redux.hook'
import { logout } from '../../store/reducers/authSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(state => state.auth)
  const exit = () => {
    dispatch(logout())
    toast.done('Вы вышли')
  }

  const [activeLink, setActiveLink] = useState({
    name: ''
  })
  const changeActive = (name: string) => {
    setActiveLink({ name: name })
  }

  return (
    <header>
      <nav>

        <NavLink to={'/'} className={({ isActive }) => isActive ? 'navlink_active' : 'navlink'} end>Главная</NavLink>

        <div className='nav_block'>
          <NavLink to={'/create_session'} className={({ isActive }) => isActive ? 'navlink_active' : 'navlink'}>Создать сессию</NavLink>
          <NavLink to={'/find_session'} className={({ isActive }) => isActive ? 'navlink_active' : 'navlink'}>Найти сессию</NavLink>
        </div>


        <NavLink to={'/profile'} className={({ isActive }) => isActive ? 'navlink_active' : 'navlink'}>Профиль</NavLink>


        {/* {token ?
          <a onClick={exit}>Выйти</a>
          :
          <a href="/auth">Войти</a>
        } */}
      </nav>
    </header>
  )
}

export default Header