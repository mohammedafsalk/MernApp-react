
const userModel = require("../Models/userModel");


module.exports = {
  getAll: (req, res) => {
    userModel
      .find()
      .then((users) => res.json(users))
      .catch((err) => res.status(400).json(err));
  },

  addUser: (req, res) => {
    const username = req.body.name;
    const newUser = new userModel({ username });
    newUser
      .save()
      .then(() => res.json("User Added"))
      .catch((err) => res.status(400).json(err));
  },
};
