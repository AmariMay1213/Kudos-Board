const prisma = require("../models/board");

exports.getAll = async (req, res) => {
  const { category, sort, search} = req.query;

  const filters = {};
  const orderBy = [];

  //this sorts by categories
  if (category) {
    filters.category = {
      equals: category,
      mode: "insensitive",
    };
  }

  if(search){
    filters.title ={
      contains: search,
      mode: "insensitive",
    };
  }

  //this is for created_at

  if (sort) {
  const parts = sort.split("_");
  const direction = parts.pop(); // last element
  const field = parts.join("_"); // rejoin the rest

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

exports.getById = async (req, res) => {
  const board_Id = Number(req.params.board_Id);

  const board = await prisma.board.findUnique({ where: { board_Id } });
  if (!board) {
    return res.status(404).json({ error: "Board not found!" });
  }
  res.json(board);
};

exports.getCategories = (req, res) => {
  const categories = ["Celebration", "Thank You", "Inspiration"];
  res.json({ categories });
};


exports.create = async (req, res) => {
  const { title, category, image_url, author } = req.body;

  const randomId = Math.floor(Math.random() * 1000); // Choose from Picsum’s range
  const generatedImage = `https://picsum.photos/id/${randomId}/300/200`;

  try {
    const board = await prisma.board.create({
      data: {
        title,
        category,
        image_url: image_url || generatedImage, // fallback to random image
        author,
      },
    });
    res.status(201).json(board);
  } catch (err) {
    res.status(400).json(err);
  }
};


exports.removeById = async (req, res) => {
  const board_Id = Number(req.params.board_Id);

  // Get the board from the database
  const board = await prisma.board.findUnique({ where: { board_Id } });

  if (!board) {
    return res.status(404).json({ error: "Board not found" });
  }

  await prisma.board.delete({ where: { board_Id } });
  res.status(204).end();
};
