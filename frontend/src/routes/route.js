import AddExpense from "@/pages/AddExpense";
import DashBoard from "@/pages/DashBoard";
import Expenses from "@/pages/Expenses";
import ForgotPassword from "@/pages/ForgotPassword";
import HomePage from "@/pages/HomePage";
import LogInPage from "@/pages/LogInPage";
import NotFound from "@/pages/NotFound";
import ProfilePage from "@/pages/ProfilePage";
import SignUpPage from "@/pages/SignUpPage";

const routes = [
    {
        path: '/',
        view: HomePage,
        layout: 'auth'
    },
    {
        path: '/signup',
        view: SignUpPage,
        title: 'Signup',
        layout: 'auth'
    },
    {
        path: '/login',
        view: LogInPage,
        title: 'Login',
        layout: 'auth'
    },
    {
        path: '/forgotpassword',
        view: ForgotPassword,
        layout: 'auth'
    },
    {
        path: '/dashboard',
        view: DashBoard,
        title: 'Dashboard',
        layout: 'app'
    },
    {
        path: '/expenses',
        view: Expenses,
        title: 'Expenses',
        layout: 'app'
    },
    {
        path: '/expenses/:id',
        view: AddExpense,
        layout: 'app'
    },
    {
        path: '/account',
        view: ProfilePage,
        layout: 'app'
    },
    {
        path: '*',
        view: NotFound,
        layout: 'auth'
    }
]

export default routes;