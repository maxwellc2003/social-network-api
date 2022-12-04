const router = require("express").Router();
const {
  addThought,
  removeThought,
  addReaction,
  removeReaction,
} = require("../../controllers/thought-controller");

// /api/comments/<pizzaId>
router.route("/:userid").post(addThought);

// /api/comments/<pizzaId>/<commentId>
router.route("/:userid/:thoughtid").put(addReaction).delete(removeThought);

router.route("/:userid/:thoughtid/:reactionid").delete(removeReaction);

module.exports = router;
