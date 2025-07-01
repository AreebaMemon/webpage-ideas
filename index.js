
const express = require('express');
const path = require('path');
const app = express();

// Serve static files from attached_assets directory
app.use('/images', express.static(path.join(__dirname, 'attached_assets')));
app.use(express.static('public'));

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on port ${PORT}`);
});
