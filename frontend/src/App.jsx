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
import Leaderboard from './components/Leaderboard';
import ForgotPassword from './pages/ForgotPassword';
import DownloadedFiles from './components/DownloadedFiles';
import {AuthProvider} from './context/AuthContext'
import AuthPage from './pages/AuthPage';
import NotFound from './pages/NotFound';

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
    path:'/password/forgotpassword',
    element:<ForgotPassword/>
  },
  {
    path:'/dashboard',
    element:<AuthPage Component={DashBoard} />,
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
      },
      {
        path:'expense/downloadedfiles',
        element:<DownloadedFiles/>
      },
      {
        path:'leaderboard',
        element:<Leaderboard/>
      },
      
    ]
  },
  {
    path:'*',
    element:<NotFound/>
  }
])


function App() {
 

  return (
    <AuthProvider>
     <RouterProvider router={router}/>
    <Toaster/>
    </AuthProvider>
  )
}

export default App
