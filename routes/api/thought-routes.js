const router = require("express").Router();
const {
  getAllThought,
  getThoughtById,
  updateThought,
  addThought,
  removeThought,
} = require("../../controllers/thought-controller");

// Set up GET all and POST at /api/thoughts
router
  .route('/')
  .get(getAllThought)
  .post(addThought);

// Set up GET one, PUT, and DELETE at /api/thoughts/:id
router
  .route('/:id')
  .get(getThoughtById)
  .put(updateThought)
  .delete(removeThought);

module.exports = router;
