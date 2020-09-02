const User = require("../models/User");

module.exports = {
  async index(request, response) {
    const users = await User.find();

    return response.json(users);
  },
  async storeUser(request, response) {
    const {
      email,
      password,
      name,
      telephone,
      address,
      number,
      neighborhood,
      city,
      state,
      cep,
    } = request.body;

    let user = await User.findOne({ email });

    if (!user) {
      user = await User.create({
        email,
        password,
        name,
        telephone,
        address,
        number,
        neighborhood,
        city,
        state,
        cep,
      });
    }

    return response.json(user);
  },
};
