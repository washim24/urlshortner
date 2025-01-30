const express = require('express');

// Import the controllers for handling URL-related requests
const { handleGenerateNewShortUrl, redirectShortUrl } = require('../controllers/url');

const router = express.Router();

// Route to generate a new short URL
router.post('/', handleGenerateNewShortUrl);

// Route to redirect based on the short URL ID
router.get('/:shortId', redirectShortUrl);

// Test route to verify the server is running

// Export the router module for use in other parts of the application
module.exports = router;
