const Donations = require("../models/Donations");

const createDonation = async (req, res) => {
  const { article_name, expiration_date, weight, quantity, category } =
    req.body;
  const donation = new Donations({
    article_name,
    expiration_date,
    weight,
    quantity,
    category,
  });
  try {
    await donation.save();
    return res.status(201).send({ success: true, data: donation });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const getDonations = async (req, res) => {
  try {
    const donations = await Donations.find();
    return res.status(200).send({ success: true, data: donations });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const getDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donations.findById(id);
    if (!donation) {
      return res
        .status(404)
        .send({ success: false, message: "Donation not found" });
    }
    return res.status(200).send({ success: true, data: donation });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const updateDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donations.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!donation) {
      return res
        .status(404)
        .send({ success: false, message: "Donation not found" });
    }
    return res.status(200).send({ success: true, data: donation });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const deleteDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donations.findByIdAndRemove(id);
    if (!donation) {
      return res
        .status(404)
        .send({ success: false, message: "Donation not found" });
    }
    return res
      .status(200)
      .send({ success: true, message: "Donation deleted successfully" });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

module.exports = {
  createDonation,
  getDonations,
  getDonation,
  updateDonation,
  deleteDonation,
};
