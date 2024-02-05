const users = require("../db/models/users");
const success_function = require("../utils/response-handler").success_function;
const error_function = require("../utils/response-handler").error_function;



exports.createUser((req,res)=>{
   try {
    let email = req.body.email;
    let password = req.body.password;

   } catch (error) {
    
   }
})