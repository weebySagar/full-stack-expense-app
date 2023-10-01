import { useState } from 'react'
import "./styles/global.scss";
import {createBrowserRouter,RouterProvider} from 'react-router-dom'
import HomePage from './pages/HomePage';
import LogInPage from './pages/LogInPage';
import SignUpPage from './pages/SignUpPage';
import {Toaster} from 'react-hot-toast'
import DashBoard from './pages/DashBoard';
import Expense from './pages/AddExpense';
import ExpenseOverview from './components/ExpenseOverview';
import ExpenseData from './components/ExpenseData';

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
  },
  {
    path:'/dashboard',
    element:<DashBoard/>,
    children:[
      {
        index:'/',
        element:<ExpenseOverview/>
      },
      {
        path:'expense',
        element:<ExpenseData/>
      },
      {
        path:'expense/addExpense',
        element:<Expense/>
      }
    ]
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
