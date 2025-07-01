

const prisma = require("../models/board");

exports.getAll = async (req, res) => {
    try {
    const boards = await prisma.board.findMany();
    res.json(boards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

};

exports.getAllUserBoards = async (req,res) =>{
    const id = Number(req.params.id);

    try {
    const userBoards = await prisma.user.findUnique({
      where: { id },
      include: {
        //include all the orderItems for this order 
        boards: true
      }
    });

    if (!userBoards) {
      return res.status(404).json({ error: "User boards not found!" });
    }

    res.json(userBoards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

}

exports.getById = async (req,res) => {

    const board_Id = Number(req.params.board_Id);

  const board = await prisma.board.findUnique({ where: { board_Id} });
  if (!board) {
    return res.status(404).json({ error: "Board not found!" });
  }
  res.json(board);
}


exports.create = async (req, res) => {
  const { title, category, author } = req.body;
  
  const newBoard = await prisma.board.create({
    data: { title, category, author },
  });

  res.status(201).json(newBoard);
};

exports.removeById = async (req, res) => {
 const board_Id = Number(req.params.board_Id);
  await prisma.board.delete({ where: { board_Id } });
  res.status(204).end();
};