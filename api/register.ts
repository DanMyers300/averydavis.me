import type { VercelRequest, VercelResponse } from '@vercel/node';
import express from 'express';

const app = express();
app.use(express.json());

app.post('/register', (req, res) => {
  const { username, email, password } = req.body;

  // Perform validation and error checking here

  // Assuming you have a function to save user data to a database
  // You should use a secure password hashing mechanism (e.g., bcrypt)
  const userId = saveUserDataToDatabase(username, email, password);

  res.status(201).json({ userId, username, email });
});

// Helper function to save user data to a database (you would need to implement this)
function saveUserDataToDatabase(username, email, password) {
  // In a real-world scenario, save this data securely to a database
  // For simplicity, let's just return a placeholder user ID
  const userId = Math.floor(Math.random() * 1000) + 1;
  return userId;
}

// Example of a route to get user information by ID
app.get('/user/:id', (req, res) => {
  const userId = req.params.id;

  // Assuming you have a function to retrieve user data from the database
  const userData = getUserDataFromDatabase(userId);

  if (userData) {
    res.status(200).json(userData);
  } else {
    res.status(404).json({ error: 'User not found' });
  }
});

// Helper function to retrieve user data from a database (you would need to implement this)
function getUserDataFromDatabase(userId) {
  // In a real-world scenario, retrieve user data from a database
  // For simplicity, let's return null for non-existent users
  return null;
}

// Set up your server
const port = process.env.PORT || 3000;
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});

export default app;
