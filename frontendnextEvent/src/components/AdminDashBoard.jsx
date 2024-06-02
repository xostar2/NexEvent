// src/AdminDashboard.js
import React from 'react';
import { Container, Box, Typography, List, ListItem, ListItemText, Paper } from '@mui/material';

const AdminDashBoard = () => {
  // Dummy data for admin and feedback
  const admin = {
    name: "John Doe",
    id: "admin123"
  };

  const feedbacks = [
    { id: 1, message: "Great service!" },
    { id: 2, message: "Could improve the response time." },
    { id: 3, message: "Very satisfied with the support." },
  ];

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h4" component="div" gutterBottom>
            Admin Dashboard
          </Typography>
          <Typography variant="h6" component="div">
            Name: {admin.name}
          </Typography>
          <Typography variant="h6" component="div">
            ID: {admin.id}
          </Typography>
        </Paper>

        <Box sx={{ my: 4 }}>
          <Typography variant="h5" component="div" gutterBottom>
            Feedback
          </Typography>
          <List>
            {feedbacks.map(feedback => (
              <ListItem key={feedback.id}>
                <ListItemText primary={feedback.message} />
              </ListItem>
            ))}
          </List>
        </Box>
      </Box>
    </Container>
  );
};

export default AdminDashBoard;
