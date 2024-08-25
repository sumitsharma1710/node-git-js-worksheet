const express = require('express');
const { combineDataSources, filePaths, apiUrls } = require('./q2.js');
const app = express();

app.get('/', async (req, res) => {
  try {
    const data = await combineDataSources(filePaths, apiUrls);
    console.log(data);
    res.json({ data });
  } catch (error) {
    console.error('Error:', error.message);
    res.status(500).json({ error: 'Failed to fetch data' });
  }
});

app.listen(8000, () => {
  console.log("Server running on port 8000");
});

module.exports = app;
