const User = require('../models/user');


exports.signup = async (req, res) => {
    try {
      const user = new User({
        userName: req.body.userName,
        password: req.body.password
      });
  
      
      const savedUser = await user.save();
  
      
      res.status(201).json(savedUser);
    } catch (error) {
      
      res.status(500).json({ error: error.message });
    }
  };