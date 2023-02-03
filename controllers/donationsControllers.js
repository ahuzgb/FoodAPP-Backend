const Donations = require("../models/Donations");

const createDonation = async (req, res) => {
  try {
    const {
      article_name,
      expiration_date,
      weight,
      quantity,
      category,
      institution,
      user,
    } = req.body;

    const user_id = req.user._id;

    const donation = new Donations({
      article_name,
      expiration_date,
      weight,
      quantity,
      category,
      institution,
      user,
      user_id,
    });
    await donation.save();
    return res.status(201).send({ success: true, data: donation });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const getDonations = async (req, res) => {
  try {
    const user_id = req.user._id;

    const allDonations = await Donations.find({ user_id })
      .populate("institution user")
      .exec();
    //const myDonations = await Donations.find({ user_id }).populate(
    //"institution"
    //);
    return res.status(200).json({ allDonations });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneDonation = async (req, res) => {
  console.log(req.params.id);
  try {
    const donation = await Donations.findById(req.params.id)
      .populate("institution user")
      .exec();
    if (!donation) {
      return res
        .status(404)
        .send({ success: false, message: "Donation not found" });
    }
    return res.status(200).send(donation);
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
  getOneDonation,
  updateDonation,
  deleteDonation,
};
