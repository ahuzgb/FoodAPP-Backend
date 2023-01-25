const jwt = require("jsonwebtoken");
const User = require("../models/User");

const requireAuth = async (req, res, next) => {
  const token = req.header("Authorization").replace("Bearer ", "");
  const data = jwt.verify(token, process.env.JWT_SECRET);
  try {
    const user = await User.findOne({ _id: data._id, "tokens.token": token });
    if (!user) {
      throw new Error();
    }
    req.user = user;
    req.token = token;
    next();
  } catch (error) {
    res.status(401).send({ error: "Not authorized to access this resource" });
  }
};

module.exports = requireAuth;
