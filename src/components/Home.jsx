import React, { useEffect } from 'react'
import ChatBox from './ChatBox';
import '../style/home.css'
import { useDispatch, useSelector } from 'react-redux';
import { updateUser } from '../Redux/Slice/loginSlice';
import Register from './Register';
import Login from './Login';
import { useState } from 'react';

const Home = () => {

  const dispatch = useDispatch()
  const [loginView , setLoginView] = useState(true);
  const [registerView, setRegisterView] = useState(false);
  const user = useSelector(state => state.login.user)

    useEffect(() => {
      const userDetails = JSON.parse(localStorage.getItem('user'));
      console.log('!!user?.name: ',!!user?.name)
      console.log('loginView: ',loginView)
      console.log('registerView: ',registerView)
      dispatch(updateUser({user: userDetails}))
    }, [loginView, registerView, user?.name])

    
  const registerLogin = () => {
    setRegisterView(!registerView)
    setLoginView(!loginView)
  }

  return (
    <div className='home-page'>
        <div className='home-container'>
        {!!user?.name && <ChatBox />}
        {(!user?.name && loginView) &&<Login registerLogin={registerLogin} />}
        {(!user?.name && registerView) && <Register  registerLogin={registerLogin} />}
        </div>
    </div>
  )
}

export default Home;
