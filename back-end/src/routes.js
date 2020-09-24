const { Router } = require("express");
const PetController = require("./controllers/PetController");
const UserController = require("./controllers/UserController");
const AdminController = require("./controllers/AdminController");

const routes = Router();

// routes.get("/", (req, res) => {
//   return res.json({ message: "Hello Word!" });
// });

routes.get("/", PetController.listpetsdash)
routes.get("/dashboard-user/", PetController.listpetsdashuser)

routes.post("/pets/newpet", PetController.addpet);
routes.get("/pets/edit/:id", PetController.editpet);
routes.post("/pets/update/:id", PetController.updatepet);
routes.get("/pets/delete/:id", PetController.deletepet);
routes.get("/pets", PetController.index);

routes.get("/users", UserController.index);
routes.post("/users/login", UserController.login);
routes.post('/users/newuser', UserController.addUser);
routes.get('/users/edit/:id', UserController.editUser);
routes.post('/users/update/:id', UserController.updateUser);
routes.get('/users/delete/:id', UserController.deleteUser);


routes.get("/dashboard-admin/users", UserController.listusers);
routes.post("/admin/login", AdminController.login)
routes.post("/admin/create", AdminController.create)

routes.get("/signin", UserController.signInUser);

module.exports = routes;
