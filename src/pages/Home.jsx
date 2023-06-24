import React from 'react'
import UserResults from '../Components/users/UserResults'
import UserSearch from '../Components/users/UserSearch'

function Home() {
  return (
    <div>

       <h1 className='text-3xl p-6'>Search The Github Profile</h1>
        <UserSearch/>
        <UserResults/>
    </div>
  )
}

export default Home