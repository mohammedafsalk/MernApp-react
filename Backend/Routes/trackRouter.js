const express = require("express");
const {
  addTrack,
  getAll,
  getOne,
  deleteOne,
  updateTrack,
} = require("../Contoller/trackController");
const router = express.Router();

router.get("/", getAll);
router.get("/:id", getOne);
router.post("/add", addTrack);
router.post("/update/:id", updateTrack);
router.delete("/:id", deleteOne);

module.exports = router;
