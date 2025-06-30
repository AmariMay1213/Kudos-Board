const express = require("express")
const router = express.Router();
const controller = require("../controllers/boardController")



// setup all routes


router.get("/", controller.getAll);
router.post("/", controller.create);
router.delete("/:order_id", controller.remove);

module.exports = router;