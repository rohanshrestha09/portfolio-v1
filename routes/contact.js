const express = require("express");
const router = express.Router();

router.post("/", require("../controller/contact"));

module.exports = router;
