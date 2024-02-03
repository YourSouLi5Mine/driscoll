import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material/styles';
import Typography from '@mui/material/Typography';
import Box from '@mui/material/Box';
import Button from '@mui/material/Button';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { StoriesContext } from '../../context/Stories';
import { useTranslation } from 'react-i18next';
import LanguageSwitcher from '../utils/LanguageSwitcher';

const StoriesList = () => {
  const { stories } = useContext(StoriesContext);
  const { t } = useTranslation();

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

  return (
    <>
      <LanguageSwitcher />
      <Box textAlign='right' mt={4} mr={4} ml={4}><Button variant='contained' color='secondary' component={Link} to='/users'>{t('users')}</Button></Box>
      <Typography variant='h2' mt={-4} mb={2} textAlign='center'>{t('stories')}</Typography>

      <CenteredTable>
        <TableHead>
          <TableRow>
            <StyledTableCell>{t('title')}</StyledTableCell>
            <StyledTableCell>{t('article')}</StyledTableCell>
          </TableRow>
        </TableHead>

        <TableBody>
          {stories.map((story) => (
            <StyledTableRow key={story.id}>
              <StyledTableCell>< Link to={`/stories/${story.id}`}>{story.title}</Link></StyledTableCell>
              <StyledTableCell>{story.article}</StyledTableCell>
            </StyledTableRow>
          ))}
        </TableBody>
      </CenteredTable>
    </>
  )
};

export default StoriesList;
