const users = require("../db/models/users");
const success_function = require("../utils/response-handler").success_function;
const error_function = require("../utils/response-handler").error_function;

exports.createUser = async function(req, res) {
  try {
    let name = req.body.name;
    let email = req.body.email;
    let password = req.body.password;

    //Validations
    let user = await users.findOne({email});

    if(user) {
        let response = error_function({
            statusCode : 400,
            message : "User already exists",
        });
        
        res.status(response.statusCode).send(response);
        return;
    }

    let new_user = await users.create({
      name,
      email,
      password,
    });

    if (new_user) {
        console.log("new_user : ", new_user);
        
        let response = success_function({
            statusCode : 201,
            data : new_user,
            message : "User created successfully",
        });
        res.status(response.statusCode).send(response);
        return;
    }else {
        let response = error_function({
            statusCode : 400,
            message : "User creation failed",
        });
        res.status(response.statusCode).send(response);
        return;
    }
  } catch (error) {
    console.log("error : ", error);
    let response = error_function({
      statusCode: 400,
      message: "Something went wrong",
    });
    res.status(response.statusCode).send(response);
    return;
  }
}

exports.getUsers  = async function(req, res) {

}

exports.updateUser = async function(req, res) {

}

exports.deleteUser = async function(req, res) {
    
}


