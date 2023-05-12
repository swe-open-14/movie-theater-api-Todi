//import our db, Model, DataTypes
const { db, DataTypes } = require('../db/connection')

//Creating a User child class from the Model parent class
const User = db.define("users", {
    username: DataTypes.STRING,
    password: DataTypes.STRING
});

user.get('/users')
//exports
module.exports = User;