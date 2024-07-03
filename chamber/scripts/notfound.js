const express = require('express');
const path = require('path');
const app = express();

// Serve static files (including your 404 image)
app.use(express.static(path.join(__dirname, 'public')));

// Your route definitions...

// Catch-all route for handling 404 errors
app.use((req, res, next) => {
    res.status(404).sendFile(path.join(__dirname, '404.html'));
});

// Start the server
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
