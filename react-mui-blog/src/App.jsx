import { useState } from "react";
import { AppBar, Toolbar, Typography, Button, Box } from "@mui/material";
import { Link, Routes, Route } from "react-router-dom";
import HomePage from "./Pages/HomePage";
import AboutPage from "./Pages/AboutPage"
import PostDetailPage from "./Pages/PostDetailsPage"

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
    <Box sx={{
      bgcolor: 'secondary.main',
      p:2,
      height: '100vh',
      
    }} >
      
      <AppBar
        position="sticky"
        sx={{
          backgroundColor: "rgba(255, 255, 255, 0.7)",
          backdropFilter: "blur(10px)",
          borderRadius: 2
        }}
        enableColorOnDark="true"
      >
        <Toolbar>
          <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
            My Blog
          </Typography>
          <Button component={Link} to='/' color="inherit">Home</Button>
          <Button component={Link} to='/about' color="inherit">About</Button>
        </Toolbar>
      </AppBar>
      <Box sx={{ p: 3 }}>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/about" element={<AboutPage />} />
          <Route path="/posts/:postId" element={<PostDetailPage />} />
        </Routes>
      </Box>
    </Box>
    </>
  );
}

export default App;
