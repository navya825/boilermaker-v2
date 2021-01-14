const router = require("express").Router();

// matches GET requests to /api/puppies/
router.get("/", function (req, res, next) {
  /* etc */
});
// matches POST requests to /api/puppies/
router.post("/", function (req, res, next) {
  /* etc */
});
// matches PUT requests to /api/puppies/:puppyId
router.put("/:userId", function (req, res, next) {
  /* etc */
});
// matches DELETE requests to /api/puppies/:userId
router.delete("/:userId", function (req, res, next) {
  /* etc */
});

router.use(function (req, res, next) {
  const err = new Error("Not found.");
  err.status = 404;
  next(err);
});

module.exports = router;
