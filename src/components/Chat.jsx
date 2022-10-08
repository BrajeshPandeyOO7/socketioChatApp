import * as React from 'react';
import useStyles from '../componentStyle/ChatStyle'
import SendIcon from '@mui/icons-material/Send';
import { useState, useEffect } from 'react';
import Papers from '../ToolStyle/chatStyle';
import Fab from '@mui/material/Fab';
import { io } from "socket.io-client";
import { API, serverListen, socketApi } from '../Api/Url';
import LogoutIcon from '@mui/icons-material/Logout';
import { useSelector, useDispatch } from 'react-redux';
import { removeUser } from '../Redux/Slice/loginSlice';
import '../style/chat.css'

const socket = io(socketApi);

const Chat = (props) => {

  const classes = useStyles()
  const [isConnected, setIsConnected] = useState(socket.connected);
  const [message, setMessage] = useState('');
  const [userId, setUserId] = useState('');
  const { name, _id } = useSelector(state => state.login.user);
  const { _id:friend_id} = props.friend;

  const [msgCollection, setMsgCollection] = useState([]);

  useEffect(() => {

    socket.on('connect', () => {
      setIsConnected(true);
      console.log('socket is connected')
    });

    socket.on('disconnect', () => {
      setIsConnected(false);
      console.log('socket is disconnected')
    });

    socket.on(_id, (recentMessage) => {
      if(recentMessage !== '')setMsgCollection([...msgCollection, recentMessage])
    })

    return() =>{
      socket.off('connect');
      socket.off('disconnect');
      socket.off(_id);
    }
  },[])

  const sendMessage = () => {
    const me = {
      from: _id,
      data: message,
      to: friend_id
    }
    // console.log('me: ',me)
    message && socket.emit(serverListen, me);
    setMessage('')
    console.log('messageCollectoins:: ', msgCollection)
  }



  return (
    <div style={{height: '88.3vh', backgroundColor: 'rgba(36,55,72,.1)'}}>
   <div className='chat-page'>
      <div className='name-field'>
          <img style={{width: '50px', borderRadius: '43px'}} src={props.friend.profile} />
          <p style={{fontWeight: 'bold', fontSize: '25px', color: '#ffeb3b', margin: '13px'}}>{props.friend.name}</p>
      </div>
      {msgCollection.map((item, index) =>{
          return (
            <Papers key={index} elevation={3} style={{float: item.identity, clear: 'both', marginLeft: '10px'}}>{item.data}</Papers>
          )
        })}
        <div style={{position: 'absolute', top: '93%'}}>
          <input type="text" className='login-input-field' style={{width: '410px', marginLeft: '11px'}} value={message} onChange={(e) => {
                              setMessage(e.target.value);
          }} />
          <Fab variant="extended" sx={{borderRadius: '100px', height: '58px', marginLeft: '23px' }}  onClick={sendMessage}>
          <SendIcon sx={{ color: '#087908', fontSize: '27px'}}/>
          </Fab>
        </div>
    </div>
    </div>
  );
}
export default Chat;

