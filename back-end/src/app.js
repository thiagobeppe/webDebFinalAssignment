const express = require("express");
const mongoose = require("mongoose");
const routes = require("./routes");
const app = express();

mongoose.connect(
  "mongodb+srv://eduardo_bz:adocao123@adocao.qzwle.mongodb.net/adocao?retryWrites=true&w=majority",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

app.use(express.json());
app.use(routes);

app.listen(3000, function () {
  console.log("Example app listening on port 3000!");
});
