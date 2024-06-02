import React, { useEffect, useState } from "react";
import {
  Container,
  Box,
  Typography,
  TextField,
  Button,
  Rating,
  Paper,
} from "@mui/material";
import axios from "axios";
import { useNavigate } from "react-router-dom";
import { useLocation } from "react-router-dom";

const FeedbackForm = () => {
  const [rating, setRating] = useState(5);
  const [comment, setComment] = useState("");
  const [message, setMessage] = useState("");
  const navigate = useNavigate();
  const [eventId, setEventId] = useState("");
  const location = useLocation();

  useEffect(() => {
    console.log(location.state.event);

    setEventId(location.state.event._id);
  }, []);
  const handleSubmit = async (e) => {
    e.preventDefault();

    const feedback = {
      // Replace with actual userId
      rating,
      comment,
      eventowner: eventId, // Replace with actual eventowner Id
    };

    try {
      const response = await axios.post(
        "http://localhost:8000/api/v1/feedbacks/userfeedback",
        feedback,
        {
          header: {
            "Content-Type": "application/json",
          },
          headers: {
            Authorization: `Bearer ${localStorage.getItem("token")}`,
          },
        }
      ); // Adjust the API endpoint as necessary
      setMessage("Feedback submitted successfully!");
      navigate("/userhomepage");
    } catch (error) {
      setMessage("Error submitting feedback. Please try again.");
    }
  };

  return (
    <Container>
      <Box sx={{ my: 4 }}>
        <Paper elevation={3} sx={{ padding: 2 }}>
          <Typography variant="h4" component="div" gutterBottom>
            Submit Feedback
          </Typography>
          <Box component="form" onSubmit={handleSubmit}>
            <Typography variant="h6" component="div" gutterBottom>
              Rate the Event
            </Typography>
            <Rating
              name="event-rating"
              value={rating}
              onChange={(event, newValue) => {
                setRating(newValue);
              }}
              precision={1}
            />
            <TextField
              fullWidth
              required
              label="Comment"
              variant="outlined"
              margin="normal"
              value={comment}
              onChange={(event) => setComment(event.target.value)}
            />
            <Button variant="contained" color="primary" type="submit">
              Submit
            </Button>
          </Box>
          {message && (
            <Typography variant="body1" color="success.main" sx={{ mt: 2 }}>
              {message}
            </Typography>
          )}
        </Paper>
      </Box>
    </Container>
  );
};

export default FeedbackForm;
