import { useState } from 'react'
import "./styles/global.scss";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import {Toaster} from 'react-hot-toast'

const router = createBrowserRouter([
  {
    path:'/',
    element:<HomePage/>
  },
  {
    path:'/user/signup',
    element:<SignUpPage/>
  },
  {
    path:'/user/login',
    element:<LogInPage/>
  }
])


function App() {
 

  return (
    <>
     <RouterProvider router={router}/>
    <Toaster/>
    </>
  )
}

export default App
