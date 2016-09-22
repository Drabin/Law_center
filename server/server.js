const express = require('express');
const path = require('path');

const app = express();
// morgan, body-parser
require('./config/init.js')(app, express);

// set port
app.set('port', 3000);

// wildcard route
app.get('*', (req, res) => {
  res.sendFile(path.resolve(`${__dirname} /../client/public/`, 'index.html'));
});
// bind and listen to connections on specified port
app.listen(app.get('port'), () => {
  console.log(`Express server started on port ${app.get('port')}`);
});

module.exports = app;
