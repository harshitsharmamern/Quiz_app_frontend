import React from 'react'
import { UserContext } from './UserContext'
import User_profile from '../User_profile'

const User_value_provider = () => {
  return (
    <>
         <UserContext>
              <User_profile/>
         </UserContext>
    </>
  )
}

export default User_value_provider