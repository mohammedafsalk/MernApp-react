
const trackModel = require("../Models/trackModel");

module.exports = {
  getAll: (req, res) => {
    trackModel
      .find()
      .then((excercises) => res.json(excercises))
      .catch((err) => res.status(400).json(err));
  },

  getOne: (req, res) => {
    trackModel
      .findOne({ _id: req.params.id })
      .then((excercise) => res.json(excercise))
      .catch((err) => res.status(400).json(err));
  },

  deleteOne: (req, res) => {
    trackModel
      .findByIdAndDelete(req.params.id)
      .then(() => res.json("deleted"))
      .catch((err) => res.status(400).json(err));
  },

  addTrack: (req, res) => {
    const username = req.body.username;
    const description = req.body.description;
    const duration = Number(req.body.duration);
    const date = Date.parse(req.body.date);

    const newTrack = new trackModel({
      username,
      description,
      duration,
      date,
    });
    newTrack
      .save()
      .then(() => res.json("Excercise Added"))
      .catch((err) => res.status(400).json(err));
  },

  updateTrack: (req, res) => {
    trackModel
      .findByIdAndUpdate(req.params.id)
      .then((excercise) => {
        excercise.username = req.body.username;
        excercise.description = req.body.description;
        excercise.duration = Number(req.body.duration);
        excercise.date = Date.parse(req.body.date);

        excercise
          .save()
          .then(() => res.json("Updated"))
          .catch((err) => res.status(400).json(err));
      })
      .catch((err) => res.status(400).json(err));
  },
};
