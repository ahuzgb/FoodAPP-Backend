const express = require("express");
const {
  getAllInstitutions,
  createInstitution,
  updateInstitution,
  deleteInstitution,
} = require("../controllers/institutionControllers");

const app = express();
const router = express.Router();

const requireAuth = require("../middlewares/requireAuth");

app.use(requireAuth);

router.route("/").get(getAllInstitutions).post(createInstitution);

router.route("/:id").put(updateInstitution).delete(deleteInstitution);

module.exports = router;
