import React, { useReducer } from 'react'
import authContext from './authContext';
import authReducer from './authReducer';
import { types } from './../../types/types';
import clientAxios from './../../config/clientAxios';

const AuthState = (props) => {
    const initialState = {
        token: localStorage.getItem('token') || '',
        user: null,
        isAuthenticated: false,
    }
    const [state, dispatch] = useReducer(authReducer, initialState)
    const startRegister=async(user)=>{
        delete user.confirmPassword
        const res=await clientAxios.post('/api/auth/local/register', user)
        localStorage.setItem('token', res.data.jwt)
        dispatch(login({
            id: res.data.user.id,
            username:res.data.user.username,
            email:res.data.user.email,
            address:res.data.user?.address,
            phone:res.data.user?.phone,
        }))
    }
    const startLogin=async(user)=>{
        const res=await clientAxios.post('/api/auth/local', user)
        localStorage.setItem('token', res.data.jwt)
        dispatch(login({
            id: res.data.user.id,
            username:res.data.user.username,
            email:res.data.user.email,
            address:res.data.user?.address,
            phone:res.data.user?.phone,
        }))
    }
    const renewLogin=async()=>{
        const res=await clientAxios.get('/api/users/me', {
            headers: {
              'Authorization':`Bearer ${state.token}`,
            },
          })
        dispatch(login({
            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            address:res.data?.address,
            phone:res.data?.phone,
        }))
    }

    const startUpdate=async(user)=>{
        const res=await clientAxios.put(`/api/users/${state.user.id}`,user, {
            headers: {
                'Authorization':`Bearer ${state.token}`,
            },

        })
        dispatch(login({
            id: res.data.id,
            username:res.data.username,
            email:res.data.email,
            address:res.data?.address,
            phone:res.data?.phone,
        }))
    }

    const login=(user)=>({
        type: types.login,
        payload: user
    })

    const startLogout=()=>{
        localStorage.removeItem('token')
        dispatch({
            type: types.logout,
        })
    }
    return <authContext.Provider value={{
        user: state.user,
        token: state.token,
        isAuthenticated: state.isAuthenticated,
        startLogin,
        startLogout,
        startRegister,
        startUpdate,
        renewLogin
    }}>
        {props.children}
    </authContext.Provider>
}

export default AuthState