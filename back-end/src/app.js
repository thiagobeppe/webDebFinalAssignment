const express = require("express");
const cors = require("cors");
const mongoose = require("mongoose");
const bodyParser = require('body-parser');
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://eduardo_bz:adocao123@adocao.qzwle.mongodb.net/adocao?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);


app.use(cors());
app.use(express.json());

// Confirma ligação na consola
mongoose.connection.on('connected', function () {
  console.log('Connected to Database');
});

// Mensagem de Erro
mongoose.connection.on('error', (err) => {
  console.log('Database error'+err);
});

app.set('view engine', 'ejs');

app.use(express.static('public'));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

app.use(routes);
app.set('views', './src/views');

app.get('/users/signup', function (req, res) {
  res.render('signup');
});

app.get('/pets/create', function (req, res) {
  res.render('newPet');
});

app.get('/dashboard-admin/users', function (req, res) {
  res.render('dashboard_admin_cruduser');
});

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
