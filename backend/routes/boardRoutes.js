const express = require("express")
const router = express.Router();
const controller = require("../controllers/boardController")



// setup all routes


router.get("/", controller.getAll);
router.get("/:board_Id", controller.getById); 
// router.get("/:id/boards", controller.getAllUserBoards); 
router.get("/categories", controller.getCategories); // <-- Add this line
router.post("/", controller.create);
router.delete("/:board_Id", controller.removeById);


module.exports = router;



//  GET /boards — all boards
//  GET /boards/:id — single board by ID
//  POST /boards — create new board
//  DELETE /boards/:id — delete board
//  Optional: GET /users/:id/boards — all boards for a user