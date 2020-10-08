const Admin = require("../models/Admin");
const { request } = require("express");
const { create } = require("../models/Admin");


module.exports = {
    async login(request, response) {
        let email = request.body.email;
        let pwd = request.body.password;
        var usr = await Admin.findOne({'email': email})
        if (usr != null) {
          if (pwd == usr.password){
            response.render('dashboard_admin', {usr:usr})
          }
          else {
            response.status(500).render("signin_admin")
          }
        }
        else   {response.status(500).render("signin_admin")}
      },
      async create(request, response){
        let email = request.body.email;
        let pwd = request.body.password;

        let data = {
            email, 
            password: pwd
        }
        var admin = await Admin.create(data)
      }
}
