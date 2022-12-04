const router = require("express").Router();
const {
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// post and delete reactions through a thoughtid
router.route("/:thoughtId/").post(addReaction).delete(removeReaction);

module.exports = router;
