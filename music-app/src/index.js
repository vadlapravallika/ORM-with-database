// src/index.js

const express = require('express');
const artistRoutes = require('./routes/artistRoutes');
const albumRoutes = require('./routes/albumRoutes');
const songRoutes = require('./routes/songRoutes');
const graphqlRoutes = require('./routes/graphqlRoutes');
const indexRoutes = require('./routes/index'); // Import the index route handler

const app = express();
const PORT = process.env.PORT || 3000;

app.use('/', indexRoutes); // Mount the index route handler
app.use('/artists', artistRoutes);
app.use('/albums', albumRoutes);
app.use('/songs', songRoutes);
app.use('/graphql', graphqlRoutes);

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
