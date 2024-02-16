const users = require("../db/models/users");
const success_function = require("../utils/response-handler").success_function;
const error_function = require("../utils/response-handler").error_function;
const bcrypt =require('bcrypt');


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

    let salt = await bcrypt.genSalt(10);
    console.log("salt:",salt);

    let hashed_password =bcrypt.hashSync(password, salt);
    console.log("hashed_password:",hashed_password)

    let new_user = await users.create({
      name,
      email,
      password: hashed_password,
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


  exports.getUsers = async function(req, res) {

    try {
      let allUsers = await users.find();
  
      if (allUsers.length > 0) {
        let response = success_function({
          statusCode: 200,
          data: allUsers,
          message: "Users retrieved successfully",
        });

        res.status(response.statusCode).send(response);
        return;

      } else {
        let response = error_function({
          statusCode: 404,
          message: "No users found",
        });
        res.status(response.statusCode).send(response);
        return;
      }

    } catch (error) {
      console.log("error : ", error);
      let response = error_function({
        statusCode: 500,
        message: "Something went wrong",
      });
      res.status(response.statusCode).send(response);
      return;
    }
  };
  
  



exports.updateUser = async function(req, res) {

try{
  let data = req.body;
  console.log("data:",data);
  

  let finalData = {
    name : data.name,
    email : data.email,
    password : data.password,
  }

  let id = data.id;
  console.log("id : ",id);
  console.log("typeOf(id) : ",typeof(id));

  let updatedUser = await users.updateOne({id},{$set : finalData})


  let response = success_function({
      statusCode: 200,
      data: updatedUser,
      message: "User updated successfully",
    })

      error_function({
      statusCode: 404,
      message: "User not found",
    });


res.status(response.statusCode).send(response);

} catch (error) {

console.log("error : ", error);
let response = error_function({
  statusCode: 500,
  message: "Something went wrong",
});

res.status(response.statusCode).send(response);
}



  
}

exports.deleteUser = async function(req, res) {

try{
  let data = req.body;
  console.log("data :",data)
  
  let finalData = {
    name : data.name,
    email : data.email,
    password : data.password,
  }

  let id = data.id;
  console.log("id : ",id);
  console.log("typeOf(id) : ",typeof(id));

  let deletedUser = await users.deleteOne({id},{$set : finalData})
  let response = success_function({
      statusCode: 200,
      data: deletedUser,
      message: "User deleted successfully",
    })

   error_function({
      statusCode: 404,
      message: "User not found",
    });

res.status(response.statusCode).send(response);

} catch (error) {
console.log("error : ", error);
let response = error_function({
  statusCode: 500,
  message: "Something went wrong",
});
res.status(response.statusCode).send(response);
}
}


