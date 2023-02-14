import jwtDecode from 'jwt-decode';
import React from 'react'

import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/Redux.hook'
import IUserData from '../interfaces/IUserData';
import { logout } from '../store/reducers/authSlice';



const ProfilePage: React.FC = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(state => state.auth)
  const userData: IUserData = jwtDecode(token)

  const exit = () => {
    dispatch(logout())
    toast.done('Вы вышли')
  }

  return (
    <div className='profile_container'>
      {userData.chatId ?
        <h1>Ваш аккаунт подтвержден</h1>
        :
        <>
          <h1>Ваш аккаунт не подтвержден</h1>
          <p>Для игры необходимо подтвердить аккаунт через телеграм бота</p>
          <button></button>
        </>
      }
      <h3>Имя: {userData.name}</h3>
      <h3>Логин: {userData.username}</h3>

      {/* {userData.roles.map(el =>
        <h1 key={el._id}>{el.value}</h1>
      )} */}

      <a onClick={exit}>Выйти</a>
    </div>
  )
}

export default ProfilePage