const Donations = require("../models/Donations");

const createDonation = async (req, res) => {
  const {
    article_name,
    expiration_date,
    weight,
    quantity,
    category,
    institution,
    user,
  } = req.body;

  const donation = new Donations({
    article_name,
    expiration_date,
    weight,
    quantity,
    category,
    institution,
    user,
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
    //console.log(user_id);
    const allDonations = await Donations.find().populate("institution");
    //const myDonations = await Donations.find({ user_id }).populate(
    //"institution"
    //);
    return res.status(200).json({ allDonations });
  } catch (error) {
    return res.status(500).json({ error: error.message });
  }
};

const getOneDonation = async (req, res) => {
  try {
    const { id } = req.params;
    const donation = await Donations.findById(id)
      .populate("institution")
      .exec(function (err, don) {
        if (err) return handleError(err);
        console.log("The institution is %s", don.institution.institution);
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
