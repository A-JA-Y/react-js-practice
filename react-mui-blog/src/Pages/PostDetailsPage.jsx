import React from 'react';
import { Container, Typography } from '@mui/material';
import { useParams } from 'react-router-dom';

const PostDetailPage = () => {
  const { postId } = useParams();
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Post Detail Page
      </Typography>
      <Typography>
        This is where the full content of a single blog post will be displayed. content for post ID: {postId}
      </Typography>
    </Container>
  );
};

export default PostDetailPage;