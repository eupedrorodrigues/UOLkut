import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom'
import Login from '../pages/Login/Login'
import Register from '../pages/Register/Register'
import { Profile } from '../pages/Profile'
import NewPass from '../pages/NewPass/NewPass'
import ForgotPass from '../pages/ForgotPass/ForgotPass'

type Props = {}

const AppRouter = (props: Props) => {
  return (
    <div>
        <BrowserRouter>
           <Routes>
            <Route path="/" element={<Login />} /> 
            <Route path="/Register" element={<Register />} /> 
            <Route path="/NewPass" element={<NewPass />} /> 
            <Route path="/ForgotPass" element={<ForgotPass />} /> 
            <Route path='/Profile' element={<Profile />}/>
           </Routes>
           {/* <Profile /> */}
        </BrowserRouter>
    </div>
  )
}

export default AppRouter