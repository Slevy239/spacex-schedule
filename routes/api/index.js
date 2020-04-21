const router = require("express").Router();
const bookRoutes = require("./books");

//Book Routes
router.use("/books", bookRoutes);

module.exports = router;