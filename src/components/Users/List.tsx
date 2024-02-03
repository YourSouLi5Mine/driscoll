import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Grid from '@mui/material/Grid';
import DeleteIcon from '@mui/icons-material/Delete';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { UsersContext } from '../../context/Users';

const UsersList = () => {
  const { users, setUsers } = useContext(UsersContext);

  const StyledTableCell = styled(TableCell)(({ theme }) => ({
    [`&.${tableCellClasses.head}`]: {
      backgroundColor: theme.palette.common.black,
      color: theme.palette.common.white,
      '&:nth-of-type(1)': {
        borderRadius: '1em 0 0 0'
      },
      '&:last-child': {
        borderRadius: '0 1em 0 0'
      }
    },
    [`&.${tableCellClasses.body}`]: {
      fontSize: 18
    },
  }));

  const StyledTableRow = styled(TableRow)(({ theme }) => ({
    '&:nth-of-type(odd)': {
      backgroundColor: theme.palette.action.hover,
    },
    '&:last-child td': {
      border: 0,
      '&:first-of-type': {
        borderRadius: '0 0 0 1em'
      },
      '&:last-child': {
        borderRadius: '0 0 1em 0'
      }
    },
  }));

  const CenteredTable = styled(Table)(({ theme }) => ({
    width: '90%',
    margin: 'auto'
  }));

  const handleDelete = (id: string) => {
    setUsers(users.filter((u) => u.id !== id));
  };

  return (
    <>
      <Grid container justifyContent="flex-end" spacing={2}>
        <Grid item>
          <Box mt={4} mr={4}><Button variant='contained' component={Link} to='/users/new'>Create</Button></Box>
        </Grid>
        <Grid item>
          <Box mt={4} mr={4} ml={4}><Button variant='contained' color='secondary' component={Link} to='/stories'>Stories</Button></Box>
        </Grid>
      </Grid>
      <Typography variant='h2' mt={-4} mb={2} textAlign='center'>Users</Typography>

      <CenteredTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>Name</StyledTableCell>
            <StyledTableCell>Email</StyledTableCell>
            <StyledTableCell>Username</StyledTableCell>
            <StyledTableCell colSpan={2}></StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {users.map((user) => (
            <StyledTableRow key={user.id}>
              <StyledTableCell>< Link to={`/users/${user.id}`}>{user.name}</Link></StyledTableCell>
              <StyledTableCell>{user.email}</StyledTableCell>
              <StyledTableCell>{user.username}</StyledTableCell>
              <StyledTableCell><Button variant='contained' component={Link} to={`/users/${user.id}/edit`}>Edit</Button></StyledTableCell>
              <StyledTableCell><Button variant='contained' startIcon={<DeleteIcon />} color='error' onClick={() => handleDelete(user.id)}>Delete</Button></StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </CenteredTable>
    </>
  )
};

export default UsersList;
