

const prisma = require("../models/board");

exports.getAll = async (req, res) => {

    const { category, sort } = req.query;

    const filters = {};
    const orderBy = [];

    //this sorts by categories
    if (category) {
    filters.category = {
      equals: category,
      mode: "insensitive",
    };
  }

  //this is for created_at

  if(sort){
    const [field, direction] = sort.split("_");

    const validField = ["created_at"];
    const validDirections = ["asc", "desc"];

    if (validField.includes(field) && validDirections.includes(direction)) {
      orderBy.push({ [field]: direction });
    } else {
      return res
        .status(400)
        .json({ error: "Invalid sort query. Use field_asc or field_desc." });
    }
   
  }

    try {
    const boards = await prisma.board.findMany({
        where: filters,
        orderBy: orderBy.length ? orderBy : undefined,
    });
    res.json(boards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

};

// exports.getAllUserBoards = async (req,res) =>{
//     const id = Number(req.params.id);

//     try {
//     const userBoards = await prisma.user.findUnique({
//       where: { id },
//       include: {
//         //include all the orderItems for this order 
//         boards: true
//       }
//     });

//     if (!userBoards) {
//       return res.status(404).json({ error: "User boards not found!" });
//     }

//     res.json(userBoards);
//   } catch (err) {
//     console.error(err);
//     res.status(500).json({ error: "Something went wrong." });
//   }

// }

exports.getById = async (req,res) => {

    const board_Id = Number(req.params.board_Id);

  const board = await prisma.board.findUnique({ where: { board_Id} });
  if (!board) {
    return res.status(404).json({ error: "Board not found!" });
  }
  res.json(board);
}

exports.create = async (req, res) => {
  const { title, category, image_url, author } = req.body;
  // const user_Id = req.user.id; // pulled from the token via middleware

  try {
    const board = await prisma.board.create({
      data: {
        title,
        category,
        image_url,
        author,
      },
    });
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json({ error: "Failed to create board" });
  }
};


exports.removeById = async (req, res) => {

 const board_Id = Number(req.params.board_Id);

  // Get the board from the database
  const board = await prisma.board.findUnique({ where: { board_Id } });

  if (!board) {
    return res.status(404).json({ error: "Board not found" });
  }

  // Make sure the logged-in user owns the board
  // if (board.user_Id !== req.user.board_Id) {
  //   return res.status(403).json({ error: "Unauthorized: You can only delete your own boards" });
  // }

  await prisma.board.delete({ where: { board_Id } });
  res.status(204).end();
};
