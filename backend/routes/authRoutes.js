const express = require("express")
const router = express.Router();
const controller = require("../controllers/authController")



// setup all routes


router.get("/", controller.loginUser);
router.post("/", controller.registerUser);

module.exports = router;