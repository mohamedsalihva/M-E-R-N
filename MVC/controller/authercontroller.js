const users = require("../db/models/users");
const success_function = require("../utils/response-handler").success_function;
const error_function = require("../utils/response-handler").error_function;
const jwt = require('jsonwebtoken');



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


  const user = await user.findOne({ email });

    
    if (!user) {
        return res.status(404).json({ error: 'User not found' });
    }

    
    const isPasswordValid = await user.comparePassword(password);

    
    if (!isPasswordValid) {
        return res.status(401).json({ error: 'Invalid password' });
    }


    const token = jwt.sign({ email: user.email }, process.env.JWT_SECRET, { expiresIn: '1h' });

    
    res.json({ token });
} catch (error) {
    console.error(error);
    res.status(500).json({ error: 'Server error' });
}
}




