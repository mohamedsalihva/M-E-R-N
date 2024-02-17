const users = require("../db/models/users");
const success_function = require("../utils/response-handler").success_function;
const error_function = require("../utils/response-handler").error_function;
const jwt = require('jsonwebtoken');
const bcrypt=require('bcrypt')



// exports.login = async function(req, res) {
//   try {
//       // Retrieve email and password from request body
//       const { email, password } = req.body;

//       // Validate email and password using regex (you can add your own validation logic here)

//       // Simulate finding a user in the database using email
//       const user = { email: 'example@example.com', password: 'password123' };

//       // If user not found, give proper error response
//       if (!user) {
//           return res.status(404).json({ message: 'User not found' });
//       }

//       // If password does not match, give error response
//       if (password !== user.password) {
//           return res.status(401).json({ message: 'Invalid password' });
//       }

//       // If password matches, generate a JWT token
//       const token = jwt.sign({ email: user.email },process.env.JWT_SECRET, { expiresIn: '30d' });

//       // Send the token in response
//       res.status(200).json({ token });
//   } catch (error) {
//       console.error('Error:', error);
//       res.status(500).json({ message: 'Internal server error' });
//   }
// };


exports.login = async function(req, res) {
  
  try {
    let email = req.body.email
    let password = req.body.password
   


   function validateEmail(){
      const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
      return emailRegex.test(email);
   }

   if(!validateEmail(email)){
    return res.status(400).send("invalid email format")
   }

   
   function validatePassword(){
      return password.length >= 8;
   }

  if(!validatePassword(password)){
    return res.status(400).send("invalid password");
  }


  const user = await users.findOne({ email });

    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }


    const comparepassword = bcrypt.compare(password,user.password);
    if (!comparepassword) {
        return res.status(401).json({ error: 'Invalid password' });
    }

    
    const access_token = jwt.sign({}, process.env.JWT_SECRET, { expiresIn: '30d' });

    const response = success_function({
      statusCode: 200,
      data:access_token,
      message:"login success",
      
    })
   
    res.status(response.statusCode).send(response);
    return;

} catch (error) {
    console.error(error);
    let response = error_function({
      statusCode: 500,
      message: "Something went wrong",
    });
    res.status(response.statusCode).send(response);
    }
  
}





