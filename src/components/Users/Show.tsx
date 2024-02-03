import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IUser } from '../../interfaces/User';
import { useParams } from 'react-router-dom';
import { UsersContext } from '../../context/Users';

const UserShow = () => {
  const { id } = useParams();
  const { users } = useContext(UsersContext);

  const [user, setUser] = useState<IUser>({
    id: '',
    name: '',
    email: '',
    username: ''
  });

  useEffect(() => {
    if (id && users.length > 0) {
      const foundUser = users.find(user => user.id === id);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id, users]);

  return (
    <>
      <Box textAlign='right' mt={4} mr={4}><Button variant='contained' component={Link} to={`/users`}>Return</Button></Box>
      <Typography variant='h3' mt={-4} mb={4} ml={2} textAlign='center'><b>Hi</b> {user.name}<b>!</b></Typography>
      <Typography variant='h5' mb={1} ml={2} textAlign='center'><b>Email:</b> {user.email}</Typography>
      <Typography variant='h5' ml={2} mb={2} textAlign='center'><b>Username:</b> {user.username}</Typography>
    </>
  );
};

export default UserShow;
