import jwtDecode from 'jwt-decode';
import React from 'react'

import { toast } from 'react-toastify';
import { useAppDispatch, useAppSelector } from '../hooks/Redux.hook'
import IUserData from '../interfaces/IUserData';
import { logout } from '../store/reducers/authSlice';



const ProfilePage = () => {
  const dispatch = useAppDispatch()
  const { token } = useAppSelector(state => state.auth)
  const userData: IUserData = jwtDecode(token)

  const exit = () => {
    dispatch(logout())
    toast.done('Вы вышли')
  }

  console.log(userData.roles.map((el)=>{console.log(el.description)}))
  console.log(userData.roles)
  return (

    <div className='profile_container'>
      <h1>{userData.name}</h1>
      <h1>{userData.chatId}</h1>
      <h1>{userData.id}</h1>
      <h1>{userData.username}</h1>
      <>
        {userData.roles.map((el) => {
          <p>{el.value}</p>
        })}
      </>
      <a onClick={exit}>Выйти</a>
    </div>
  )
}

export default ProfilePage