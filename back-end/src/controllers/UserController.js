const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const users = await User.find();

    return response.json(users);
  },

  async listusers(request, response) {
    User.find({}).then(function(user){
      response.render('dashboard_admin_cruduser', {users: user});
    });
  },

  async adduser(request, response) {
    let email = request.body.email;
    let password = request.body.password;
    let name = request.body.name;
    let telephone = request.body.telephone;
    let address = request.body.address;
    let number = request.body.number;
    let neighborhood = request.body.neighborhood;
    let city = request.body.city;
    let state = request.body.state;
    let cep = request.body.cep;

    let data = {
      email: email,
      password: password,
      name: name,
      telephone: telephone,
      address: address,
      number: number,
      neighborhood: neighborhood,
      city: city,
      state: state,
      cep: cep
    };
    
    User.create(data).then(function(user){
      response.render('signup')
    });
  },
  // async storeUser(request, response) {
  //   const {
  //     email,
  //     password,
  //     name,
  //     telephone,
  //     address,
  //     number,
  //     neighborhood,
  //     city,
  //     state,
  //     cep,
  //   } = request.body;

  //   let user = await User.findOne({ email });

  //   if (!user) {
  //     user = await User.create({
  //       email,
  //       password,
  //       name,
  //       telephone,
  //       address,
  //       number,
  //       neighborhood,
  //       city,
  //       state,
  //       cep,
  //     });
  //   }

  //   return response.json(user);
  // },
};
