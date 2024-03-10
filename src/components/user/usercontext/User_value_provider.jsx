import React from 'react'
import { UserContext, UserContextProvider } from './UserContext'
import UserProfile from '../UserProfile'
// import User_profile from '../User_profile'

const User_value_provider = () => {
  return (
    <>
         <UserContext>

             <UserProfile/>
         </UserContext>
    </>
  )
}

export default User_value_provider