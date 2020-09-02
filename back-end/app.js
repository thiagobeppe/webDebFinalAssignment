const express = require('express');
const mongoose = require('mongoose');

const app = express();

mongoose.connect('mongodb+srv://eduardo_bz:adocao123@adocao.qzwle.mongodb.net/Adocao?retryWrites=true&w=majority', {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

app.use(express.json());

app.post('/users', function (req, res) {
  console.log(req.body);
  return res.json({ message: 'Funfou!' });
});

app.listen(3000, function () {
  console.log('Example app listening on port 3000!');
});


