import React from 'react'
import { Routes, Route } from 'react-router-dom';
import ProfileUser from './../containers/ProfileUser';
const UserRoute = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<ProfileUser />} />
        </Routes>
    </div>
  )
}

export default UserRoute