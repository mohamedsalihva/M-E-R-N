const jwt = require('jsonwebtoken');
const users = require('../db/models/users'); 
const dotenv =require('dotenv');
dotenv.config();


function checklogin (req, res, next)  {
   
    const token = req.headers.authorization;

  
    if (!token) {
        return res.status(401).json({ error: 'Token is missing' });
    }

    try {
        
        const decodedToken = jwt.verify(token, process.env.JWT_SECRET); 
        console.log("decodedToken:",decodedToken);
        const userId = decodedToken.user_id;

        
        users.findById(userId, (err, user) => {
            if (err || !user) {
                return res.status(404).json({ error: 'User not found' });
            }

          
            req.user = user;

          
            next();
        });
    } catch (error) {
        
        return res.status(401).json({ error: 'Invalid token' });
    }
};


module.exports = checklogin;
