import React, { useEffect } from 'react'
import Chat from './Chat';
import { useState } from 'react';
import Register from './Register';
import { useSelector, useDispatch } from 'react-redux';
import Login from './Login';
import FindFriend from './FindFriend';
import '../style/chatBox.css'
import LogoutIcon from '@mui/icons-material/Logout';
import KeyboardBackspaceRoundedIcon from '@mui/icons-material/KeyboardBackspaceRounded';
import { removeUser } from '../Redux/Slice/loginSlice';

const ChatBox = (props) => {

  const dispatch = useDispatch();
  const user  = useSelector(state => state.login.user)?.name || JSON.parse(localStorage.getItem('user'))?.name;
  const [person, setPerson] = useState({})

  useEffect(() => {
    
  },[user]);

  const backFromChat = () => {
    setPerson({});
  }


  const openChat = (item) => {
    setPerson(item);
  }

  const logOut = () => {
    localStorage.removeItem('user');
    dispatch(removeUser({user:{}}))
  }

  return (
    <div className='chatBox-page' style={{height: '93.3vh'}}>
      <div className='chat-box-name-field'>
          <KeyboardBackspaceRoundedIcon style={{fontWeight: 'bold', fontSize: '47px', color: '#ffeb3b'}} onClick={backFromChat}></KeyboardBackspaceRoundedIcon>
          <LogoutIcon style={{fontSize: '36px',color: 'rgb(223 245 13)', cursor: 'pointer'}} onClick={logOut}></LogoutIcon>
      </div>
      {!person.name && <FindFriend openChatSection={openChat} />}
      {person.name && <Chat friend={person} />}
    </div>
  )
}

export default ChatBox;
