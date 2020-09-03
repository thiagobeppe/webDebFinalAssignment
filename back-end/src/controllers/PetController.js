const Pet = require("../models/Pet");

module.exports = {
  async index(request, response) {
    const pets = await Pet.find();

    return response.json(pets);
  },

  async addpet(request, response) {
    let name = request.body.name;
    let breed = request.body.breed;
    let type = request.body.type;
    let shape = request.body.shape;
    let gender = request.body.gender;
    let color = request.body.color;
    let age = request.body.age;
    let status = request.body.status;
    let obs = request.body.obs;
    let owner = request.body.owner;

    let data = {
      name: name,
      breed: breed,
      type: type,
      shape: shape,
      gender: gender,
      color: color,
      age: age,
      status: status,
      obs: obs,
      owner: owner
    };

    Pet.create(data).then(function(pet){
      response.render('newPet')
    });
  },
};
