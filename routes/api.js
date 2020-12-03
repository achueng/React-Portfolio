const router = require("express").Router();
const contactController = require("../controllers/contactController");

router.route("/contacts")
  .post(contactController.postContacts)

module.exports = router;