

const express = require("express")
const router = express.Router();
const controller = require("../controllers/userController")



// setup all routes


router.get("/", controller.getAll);
router.get("/:id", controller.getUserById); 
router.post("/", controller.registerUser);
router.post("/login", controller.userLogin)
router.delete("/:id", controller.removeUser);


module.exports = router;

