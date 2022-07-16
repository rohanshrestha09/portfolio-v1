const asyncHandler = require("express-async-handler");
const User = require("../model/Users");

module.exports = asyncHandler(async (req, res) => {
  const { name, email, subject, message } = req.body;

  try {
    await User.create({ name, email, subject, message });
    res.sendStatus(200);
  } catch (err) {
    res.sendStatus(400);
  }
});
