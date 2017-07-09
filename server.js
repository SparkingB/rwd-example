const express = require('express');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000; 


app.use(express.static(__dirname));


app.get('*', (req, res, next) => {
  res.sendFile(path.resolve(__dirname, 'index.html'))
})


app.listen(PORT, (err) => {
  if (err) {
    console.log(err);
    return;
  }
  console.log(`Listening at http://localhost:${PORT}`);
});