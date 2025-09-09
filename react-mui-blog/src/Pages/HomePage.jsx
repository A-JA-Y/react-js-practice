import React from "react";
import { Link } from "react-router-dom";
import { Container, Typography, List, ListItem, ListItemButton, ListItemText } from "@mui/material";

const HomePage = () => {
  const posts = [
    {
      id: 1,
      title: "My First Post",
      excerpt: "This is the short summary of my first post.",
    },
    {
      id: 2,
      title: "React Router is Awesome",
      excerpt: "Learning about dynamic routing.",
    },
    {
      id: 3,
      title: "Styling with MUI",
      excerpt: "MUI makes styling so much easier.",
    },
  ];
  return (
    <Container>
      <Typography variant="h4" component="h1" gutterBottom>
        Blog Posts
      </Typography>
      <List>
        {posts.map((post) => (
          <ListItem key={post.id} disablePadding>
            <ListItemButton component={Link} to={`/posts/${post.id}`}>
              <ListItemText primary={post.title} secondary={`${post.excerpt} is secondary text`} />
            </ListItemButton>
          </ListItem>
        ))}
      </List>
    </Container>
  );
};

export default HomePage;
