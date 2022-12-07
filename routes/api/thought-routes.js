const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/thoughts
router.route("/").get(getAllThought).post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route("/:id")
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

// post and delete reactions through a thoughtid
router.route("/:thoughtId/reactions").post(addReaction).delete(removeReaction);

module.exports = router;
