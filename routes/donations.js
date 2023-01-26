const express = require("express");
const app = express();
const router = express.Router();
const {
  createDonation,
  getDonations,
  getDonation,
  updateDonation,
} = require("../controllers/donationsControllers");
const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

router.route("/").get(getDonations).post(createDonation);
router.route("/:id").get(getDonation).put(updateDonation);

module.exports = router;
