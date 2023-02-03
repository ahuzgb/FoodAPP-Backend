const express = require("express");
const app = express();
const router = express.Router();
const {
  createDonation,
  getDonations,
  getOneDonation,
  updateDonation,
} = require("../controllers/donationsControllers");
const requireAuth = require("../middlewares/requireAuth");

router.use(requireAuth);

router.route("/").get(getDonations).post(createDonation);
router.route("/:id").get(getOneDonation).put(updateDonation);

module.exports = router;
