const { log } = require('console');
const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  log('hello world from Index');
  res.send('Hello World; welcome to AWS Ec2!')
});

app.listen(port, () => {console.log(`Example app listening on port ${port}`)})