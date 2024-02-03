import React, { useEffect, useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import { IStory } from '../../interfaces/Story';
import { useParams } from 'react-router-dom';
import { StoriesContext } from '../../context/Stories';

const StoryShow = () => {
  const { id } = useParams();
  const { stories } = useContext(StoriesContext);

  const [story, setStory] = useState<IStory>({
    id: '',
    title: '',
    article: ''
  });

  useEffect(() => {
    if (id && stories.length > 0) {
      const foundStory = stories.find(s => s.id === id);
      if (foundStory) {
        setStory(foundStory);
      }
    }
  }, [id, stories]);

  return (
    <>
      <Box textAlign='right' mt={4} mr={4}><Button variant='contained' component={Link} to='/stories'>Return</Button></Box>
      <Typography variant='h3' mt={-4} mb={4} ml={2} textAlign='center'>{story.title}</Typography>
      <Typography variant='h5' mb={1} ml={2} textAlign='center'>{story.article}</Typography>
    </>
  );
};

export default StoryShow;
