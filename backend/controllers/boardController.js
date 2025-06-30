const prisma = require("../models/board");

exports.getAll = async (req, res) => {

};



exports.create = async (req, res) => {
  const { title, category, author } = req.body;
  
  const newBoard = await prisma.board.create({
    data: { title, category, author },
  });

  res.status(201).json(newBoard);
};

exports.remove = async (req, res) => {
  const order_id = Number(req.params.order_id);
  await prisma.order.delete({ where: { order_id } });
  res.status(204).end();
};