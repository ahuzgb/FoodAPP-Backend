const express = require("express");
const router = express.Router();
const donationControllers = require("../controllers/donationsControllers");
const requireAuth = require("../middlewares/requireAuth");

router.post("/donations", requireAuth, donationControllers.createDonation);
router.get("/donations", requireAuth, donationControllers.getDonations);
router.get("/donations/:id", requireAuth, donationControllers.getDonation);
router.put("/donations/:id", requireAuth, donationControllers.updateDonation);
router.delete(
  "/donations/:id",
  requireAuth,
  donationControllers.deleteDonation
);

module.exports = router;
