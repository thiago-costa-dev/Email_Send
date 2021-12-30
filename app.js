const express = require('express');
const controllers = require('./controllers');
const app = express();

app.get('/', controllers.homePage);
app.get('/getted', controllers.gettedPage);

app.listen(3000, () => console.log("Server is running on: http://localhost:3000"));



