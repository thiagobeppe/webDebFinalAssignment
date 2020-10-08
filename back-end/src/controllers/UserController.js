const User = require("../models/User");
const Pet = require("../models/Pet");
const { request } = require("express");

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

  async login(request, response) {
    let email = request.body.email;
    let pwd = request.body.password;
    var usr = await User.findOne({'email': email})
    if (usr != null) {
      if (pwd == usr.password){
        Pet.find({}).then(function(pet){
          response.render('dashboard_user', {pets: pet, data: usr});
        });
        // response.render('dashboard_user',data=usr)
      }
      else {
        response.status(500).render("signin")
      }
    }
    else   {response.status(500).render("signin")}
  },

  async addUser(request, response) {
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

  async editUser(request,response){
    User.findOne({_id: request.params.id}).then(function(user){
      response.render('editUser', {user: user});
    }).catch(next);
  },

  async updateUser(request,response){
    User.findByIdAndUpdate({_id: request.params.id}, request.body).then(function(){
      response.redirect('/dashboard-admin/users');
    }).catch(next);
  },

  async deleteUser(request,response){
    User.findOneAndDelete({_id: request.params.id}).then(function(user){
      console.log("Registo eliminado com sucesso!");
      response.redirect('/dashboard-admin/users');
    }).catch(next);
  },

  async signInUser(request,response){
    response.render('signin')
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
