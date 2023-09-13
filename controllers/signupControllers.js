const User = require('../models/signup');



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

  exports.login = async (req, res) => {
    try {
      const { userName, password } = req.body;
  
      
      const user = await User.findOne({ userName });
  
      if (!user) {
        
        return res.status(401).json({ error: 'Invalid username or password' });
      }
      console.log("sss " + user);
  
     
      const passwordMatch = await user.password;
      
  
      if (!passwordMatch) {
        return res.status(401).json({ error: 'Invalid username or password' });
      }
  
  
      res.status(200).json({ message: 'Login successful', user });
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  };