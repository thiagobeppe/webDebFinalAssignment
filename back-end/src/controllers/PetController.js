const Pet = require("../models/Pet");

module.exports = {
  async index(request, response) {
    const pets = await Pet.find();

    return response.json(pets);
  },

  async storePet(request, response) {
    const {
      name,
      breed,
      type,
      shape,
      gender,
      color,
      age,
      status,
      obs,
    } = request.body;

    let pet = await Pet.findOne({ name });

    if (!pet) {
      pet = await Pet.create({
        name,
        breed,
        type,
        shape,
        gender,
        color,
        age,
        status,
        obs,
      });
    }

    return response.json(pet);
  },
};
