const { Router } = require("express");
const PetController = require("./controllers/PetController");
const UserController = require("./controllers/UserController");

const routes = Router();

routes.get("/", (req, res) => {
  return res.json({ message: "Hello Word!" });
});

routes.post("/pets", PetController.storePet);

routes.get("/pets", PetController.index);

routes.post("/users", UserController.storeUser);

routes.get("/users", UserController.index);

module.exports = routes;
