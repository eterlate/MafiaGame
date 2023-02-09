import React from 'react'
import { toast } from 'react-toastify'
import { useAppDispatch } from '../hooks/Redux.hook'
import { logout } from '../store/reducers/authSlice'

const Header = () => {
  const dispatch = useAppDispatch()
  const exit = () => {
    dispatch(logout())
    toast.done('Вы вышли')
  }

  return (
    <header>
      <a href="/">Главная</a>
      <a href="/auth">Войти</a>
      <a onClick={exit}>Выйти</a>
    </header>
  )
}

export default Header