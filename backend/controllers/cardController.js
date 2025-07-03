const prisma = require("../models/card");

exports.getAll = async (req, res) => {
    try {
    const cards = await prisma.card.findMany();
    res.json(cards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

};

exports.getAllBoardCards = async (req,res) =>{
    const board_Id = Number(req.params.board_Id);

    try {
    const allCards = await prisma.board.findUnique({
      where: { board_Id },
      include: {
        cards: true
      }
    });

    if (!allCards) {
      return res.status(404).json({ error: "Cards for this board can not be found!" });
    }

    res.json(allCards);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

}

exports.getById = async (req,res) => {

    const card_Id = Number(req.params.card_Id);

  const card = await prisma.card.findUnique({ where: { card_Id} });
  if (!card) {
    return res.status(404).json({ error: "Card not found!" });
  }
  res.json(card);
}

exports.create = async (req, res) => {
  const { title, description, gif_Url, board_Id, author } = req.body;
  // const user_Id = req.user?.id ?? null; // support optional association

  try {
    const newCard = await prisma.card.create({
      data: {
        title,
        description,
        gif_Url,
        board_Id,
        author,
        // user_Id, // if logged in, associate; else leave null
      },
    });
    res.status(201).json(newCard);
  } catch (err) {
    res.status(400).json({ error: "Failed to create card" });
  }
};


exports.upvote = async (req, res) => {
  const card_Id = Number(req.params.card_Id);

  try {
    const upVote = await prisma.card.update({
      where: { card_Id },
      data: {
        upVotes: {
          increment: 1,
        },
      },
    });

    res.json(upVote);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Failed to upvote card." });
  }
};


exports.removeById = async (req, res) => {
 const card_Id = Number(req.params.card_Id);
  await prisma.card.delete({ where: { card_Id } });
  res.status(204).end();
};