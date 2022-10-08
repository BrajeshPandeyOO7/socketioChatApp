import React, { useState } from 'react'
import { useEffect } from 'react';
import { getAllUser } from '../Api/getAllUsers';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import CardMedia from '@mui/material/CardMedia';
import '../style/findFriend.css'

const FindFriend = (props) => {

  const [userList , setUserList] = useState([]);

  useEffect(() => {
    getUsers()
  }, []);

  const getUsers = async () => {
    const allUser = await getAllUser();
    console.log('allUser; ',allUser.result)
    if(allUser.ok){
      setUserList(allUser.result);
    }

  }

  const openChat = (e, item) => {
    e.stopPropagation();
    props.openChatSection(item);
  }

  return (
    <div className='find-friend-page'>
      {
        userList.map((item, index) => {
          return(
              <div key={index} className='find-friend-card' >
                <Card sx={{ display: 'flex', width: 'auto', height: '120px'}} onClick={(e) => openChat(e,item)}>
                  <Box sx={{ display: 'flex' }}>
                    <CardMedia
                      component="img"
                      sx={{ width: 'auto' }}
                      image={item.profile || "https://i.pinimg.com/originals/bb/93/54/bb93543886e176cd35f5d532a46a8f60.jpg"}
                      alt="Live from space album cover"
                    />
                    <CardContent sx={{ flex: '1 0 auto' }}>
                      <Typography component="div" variant="">
                        {item.name}
                      </Typography>
                    </CardContent>
                  </Box>
                </Card>
             </div>
          )
        })
      }
    </div>
  )
}
export default FindFriend;
