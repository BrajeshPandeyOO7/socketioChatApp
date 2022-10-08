import { useDispatch } from 'react-redux';
import { updateUser } from '../Redux/Slice/loginSlice';
import '../style/login.css'
import LoginRoundedIcon from '@mui/icons-material/LoginRounded';
import { borderBottom } from '@mui/system';
import { FailedToStartTransportError } from '@microsoft/signalr/dist/esm/Errors';
import { register } from '../Api/loginApi';

const { useState } = require('react');

const Register = (props) => {

    const [name, setName] = useState('');
    const [mobile, setMobile] = useState('');
    const [password, setPassword] = useState('');
    const [fieldError, setFieldError] = useState('')
    const dispatch = useDispatch();

    const submitForm = async () => {
        if(name && mobile && name){
            const result = await register({name,mobile,password})
            if(result.ok){
                console.log('result: ',result)
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
                        <h3 className='login-input-label-field'>Name</h3>
                        <input type="text" className='login-input-field' style={{borderBottom: fieldError}} value={name} onChange={(e) => {
                            setName(e.target.value);
                        }} />
                    </section>

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

                    <button className='login-box-submit-btn' type="submit" onClick={submitForm}>submit</button>
                    <section>
                    <LoginRoundedIcon className='login-icon' onClick={() => props.registerLogin()}></LoginRoundedIcon>
                    </section>
                </div>

            </div>
        </div>
    )
}

export default Register;