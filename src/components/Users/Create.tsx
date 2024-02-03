import React, { useState, useEffect, useContext } from 'react';
import { IUser } from '../../interfaces/User';
import Box from '@mui/material/Box';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import { faker } from '@faker-js/faker';
import { UsersContext } from '../../context/Users';
import { useNavigate, useParams, Link } from 'react-router-dom';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../utils/LanguageSwitcher';

const UserCreate = () => {
  const { id } = useParams();
  const { users, setUsers } = useContext(UsersContext);
  const navigate = useNavigate();
  const { t } = useTranslation();

  const [user, setUser] = useState<IUser>({
    id: faker.string.uuid(),
    name: '',
    email: '',
    username: ''
  });

  useEffect(() => {
    if (id && users.length > 0) {
      const foundUser = users.find(u => u.id === id);
      if (foundUser) {
        setUser(foundUser);
      }
    }
  }, [id, users]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = e.target;

    setUser((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (id) {
      setUsers(users.map((u) => u.id === user.id ? user : u));
    } else {
      users.push(user);
    }
    navigate('/users');
  };

  return (
    <>
      <LanguageSwitcher />
      <Box textAlign='right' mt={4} mr={4}><Button variant='contained' component={Link} to='/users'>{t('cancel')}</Button></Box>
      <Box mt={-6}>
        <form onSubmit={handleSubmit}>
          <Box display='flex' flexDirection='column' maxWidth='300px' margin='auto' mt={4}>
            <TextField
              label={t('name')}
              variant='outlined'
              name='name'
              value={user.name}
              onChange={handleChange}
              margin='normal'
              required
            />

            <TextField
              label={t('email')}
              variant='outlined'
              name='email'
              value={user.email}
              onChange={handleChange}
              margin='normal'
              required
            />

            <TextField
              label={t('username')}
              variant='outlined'
              name='username'
              value={user.username}
              onChange={handleChange}
              margin='normal'
              required
            />

            <Button type="submit" variant="contained" color="primary" fullWidth>{t('submit')}</Button>
          </Box>
        </form>
      </Box>
    </>
  );
};

export default UserCreate;
