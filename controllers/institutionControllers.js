const Institution = require("../models/Institution");

const createInstitution = async (req, res) => {
  const { institution, street, zip, city } = req.body;
  const newInstitution = new Institution({
    institution,
    street,
    zip,
    city,
  });
  try {
    await newInstitution.save();
    return res.status(201).send({ success: true, data: newInstitution });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const getAllInstitutions = async (req, res) => {
  try {
    const institutions = await Institution.find();
    return res.status(200).send({ success: true, data: institutions });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const getInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findById(id);
    if (!institution) {
      return res
        .status(404)
        .send({ success: false, message: "Institution not found" });
    }
    return res.status(200).send({ success: true, data: institution });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const updateInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findByIdAndUpdate(id, req.body, {
      new: true,
    });
    if (!institution) {
      return res
        .status(404)
        .send({ success: false, message: "Institution not found" });
    }
    return res.status(200).send({ success: true, data: institution });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

const deleteInstitution = async (req, res) => {
  try {
    const { id } = req.params;
    const institution = await Institution.findByIdAndRemove(id);
    if (!institution) {
      return res
        .status(404)
        .send({ success: false, message: "Institution not found" });
    }
    return res
      .status(200)
      .send({ success: true, message: "Institution deleted successfully" });
  } catch (error) {
    return res.status(500).send({ success: false, error: error.message });
  }
};

module.exports = {
  createInstitution,
  getInstitution,
  getAllInstitutions,
  updateInstitution,
  deleteInstitution,
};
