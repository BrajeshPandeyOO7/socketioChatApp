import React, { useState } from 'react';
import '../style/login.css';
import { useSelector, useDispatch } from 'react-redux';
import { updateUser } from '../Redux/Slice/loginSlice';
import { login } from '../Api/loginApi'
import { useEffect } from 'react';
import axios from 'axios';

const Login = (props) => {

  const [mobile, setMobile] = useState('');
  const [password, setPassword] = useState('');
  const [fieldError, setFieldError] = useState('')
  const dispatch = useDispatch()

  useEffect(() => {
    
  }, [])

  const submitForm = async () => {
    if(mobile && password){
      const result = await login({mobile, password})
      if(result.ok){
        console.log('login result: ',result)
        localStorage.setItem('user', JSON.stringify(result.result));
        dispatch(updateUser({user: result.result}))
      }
    }else{
      setFieldError('3px solid red');
      setTimeout(() => {
          setFieldError('');
      }, 1000)
  }
}

  return (
    <div className='login-page' style={{height: '100vh', backgroundColor: 'rgba(36,55,72,.1)'}}>
    <div className='login-box'>
      <div>
        <section>
            <h3 className='login-input-label-field' > mobile no.</h3>
            <input type="text" className='login-input-field' style={{borderBottom: fieldError}} value={mobile} onChange={(e) => {
                setMobile(e.target.value);
            }} />
          
        </section>

        <section>
            <h3 className='login-input-label-field' >password  </h3>
            <input type="text" className='login-input-field' style={{borderBottom: fieldError}} value={password} onChange={(e) => {
                setPassword(e.target.value);
            }} />
          
        </section>

        <button className='login-box-submit-btn' onClick={submitForm}>submit </button>
            <section>
              <div className='register-icon' onClick={() => props.registerLogin()}>register</div>
            </section>
      </div>
    </div>
</div>
  )
}

export default Login
