const express = require('express');
const path = require('path');
const parser = require('body-parser');
const user = require('./router/user')

const app = express();
const PORT = 3000;

app.use(parser.json());

app.use(express.static(path.join(__dirname, '../dist')))

//Router for Server
app.use('/user', user)


app.listen(PORT, () => {
  console.log("Listening to port: ", PORT)
})
