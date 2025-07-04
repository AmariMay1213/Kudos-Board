const express = require("express")
const router = express.Router();
const controller = require("../controllers/cardController")
// setup all routes

router.get("/", controller.getAll);
router.get("/:board_Id/board", controller.getAllBoardCards); // <- Move this up
router.get("/:card_Id", controller.getById); 
router.post("/", controller.create);
router.post("/:card_Id/upvote", controller.upvote); 
router.delete("/:card_Id", controller.removeById);


module.exports = router;