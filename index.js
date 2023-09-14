const express = require('express');
const app = express();
const mongoose = require('mongoose');
const DB = require("./config/studentConfig");
const studentRoutes = require('./routes/studentRoutes');
const configData = require("./config/studentConfig");
const cors = require('cors')



const port = configData.db_port;

app.use(cors())
// app.use
mongoose.connect(DB.db_url, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
}).then(()=>{
    console.log("Connected to the database.")
}).catch (err=>{
    console.log("Not connected to the database.", err);
    process.exit();
}) ;

app.use(express.json());

app.use('/students', studentRoutes);

app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});