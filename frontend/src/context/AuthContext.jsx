import {createContext,useContext,useEffect,useReducer,useState} from 'react';

const AuthContext = createContext();


const initialState = {
    isAuthenticated:false,
    user: JSON.parse(localStorage.getItem('user')) || null,
    token: localStorage.getItem('token') || null
}

const authReducer = (state,action)=>{
    switch(action.type){
        case 'LOGIN':
            return {
                ...state,
                isAuthenticated:true,
                user:action.payload.user,
                token:action.payload.token
            }
            // return [{
            //     isAuthenticated:true,
            //     user:action.payload.user,
            //     token:action.payload.token
            // },...state]
            // return {...state,
            // isAuthenticated:true,
            // user:action.payload.user,
            // token:action.payload.token
        
        case 'LOGOUT':
            return initialState;
        default:
            return state;
    }
}

export const AuthProvider = ({children}) => {
    const [state,dispatch] =  useReducer(authReducer,initialState);

    const login = (user,token)=>{        
        dispatch({type:'LOGIN',payload:{user,token}})
        // console.log(data);
    }

    const logout = ()=>{
        dispatch({type:'LOGOUT'})
        // setUser(null);
    }

   

    useEffect(() => {
        // Check if a token exists in local storage (e.g., on page refresh)
        const token =localStorage.getItem('token');
        const user =JSON.parse(localStorage.getItem('user'))
        
        if (token &&user) {
            login(user,token);
        }
    }, []);

    return (
        <AuthContext.Provider value={{...state,login,logout}}>
            {children}
        </AuthContext.Provider>
    )
}

export const useAuth = ()=>{
    return useContext(AuthContext)
}