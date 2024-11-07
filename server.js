const express = require('express');
const history = require('connect-history-api-fallback');
const path = require('path');

import express from 'express';
import path from 'path';
import history from 'connect-history-api-fallback';

const app = express();
const __dirname = path.resolve(); // Needed in ES module for path resolution

// Use history API fallback for handling client-side routing
app.use(history());

// Serve static files from the React build folder
app.use(express.static(path.join(__dirname, 'build')));

// Serve index.html on all routes after the fallback middleware
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start the server on port 3000
app.listen(3000, () => {
  console.log('Server is running on port http://localhost:3000/api/v1');
});
