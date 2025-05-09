// import React, { useState } from "react";
// import Navbar from './components/Navbar'
// import Sidebar from "./components/Sidebar";
// import { Route, Routes } from "react-router-dom";
// import Add from './pages/Add'
// import List from './pages/List'
// import Orders from './pages/Orders'
// import Login from "./components/Login";
// import { ToastContainer } from 'react-toastify';
// import 'react-toastify/dist/ReactToastify.css';


// const backendUrl = import.meta.env.VITE_BACKEND_URL

// const App = () => {

//     const [token, setToken] = useState('')

//     return (
//         <div className='bg-gray-50 min-h-screen'> 
//         <ToastContainer/>

//         {token === ""
//            ? <Login setToken={setToken}/>
//            :
//            <>
//            <Navbar />
//            <hr />

//            <div className="flex w-full">
//                <Sidebar />
//                <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>

//                    <Routes>
//                        <Route path='/Add' element={<Add />} />
//                        <Route path='/List' element={<List />} />
//                        <Route path='/Orders' element={<Orders />} />
//                    </Routes>

//                </div>
//            </div>
//        </>
        
//         }

           

//         </div>
//     )
// }


// export default App











import React from 'react'
import { useEffect } from 'react'
import Navbar from './components/Navbar'
import Sidebar from './components/Sidebar'
import {Routes, Route} from 'react-router-dom'
import Add from './pages/Add'
import List from './pages/List'
import Orders from './pages/Orders'
import { useState } from 'react'
import Login from './components/Login'
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
export const backendUrl = import.meta.env.VITE_BACKEND_URL
export const currency = 'Rs'

const App = () => {

  const [token, setToken] = useState(localStorage.getItem('token')?localStorage.getItem('token'):'');

  useEffect(()=>{
    localStorage.setItem('token',token)
  },[token])

  return (
    <div className='bg-gray-50 min-h-scren'>
      <ToastContainer />
      {token === "" 
      ? <Login setToken = {setToken}/>
      : <>
      <Navbar setToken={setToken}/>
      <hr />
      <div className='flex w-full'>
        <Sidebar />
        <div className='w-[70%] mx-auto ml-[max(5vw, 25px)] my-8 text-gray-600 text-base'>
          <Routes>
            <Route path='/Add' element={<Add token = {token}/>} />
            <Route path='/List' element={<List token = {token}/>} />
            <Route path='/Orders' element={<Orders token = {token}/>} />
          </Routes>
        </div>
      </div>
    </>
}
    </div>
    
  )
}

export default App








