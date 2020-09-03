const { Router } = require("express");
const PetController = require("./controllers/PetController");
const UserController = require("./controllers/UserController");
const AdminController = require("./controllers/AdminController");

const routes = Router();

// routes.get("/", (req, res) => {
//   return res.json({ message: "Hello Word!" });
// });

routes.get("/", PetController.listpets)

routes.post("/pets/newpet", PetController.addpet);
routes.get("/pets", PetController.index);

routes.get("/users", UserController.index);
routes.post("/users/login", UserController.login);
routes.post('/users/newuser', UserController.adduser);

routes.get("/dashboard-admin/users", UserController.listusers);
routes.post("/admin/login", AdminController.login)
routes.post("/admin/create", AdminController.create)

routes.get("/signin", UserController.signInUser);

module.exports = routes;
