require("dotenv").config(); // lets us use .env variables in our code

const express = require("express");
const app = express();
const { PrismaClient } = require('@prisma/client')
const prisma = new PrismaClient()
const morgan = require("morgan");

const boardRoutes = require("./routes/boardRoutes");
const cardRoutes = require("./routes/cardRoutes");
// const userRoutes = require("./routes/userRoutes"); 


app.use(express.json());
app.use(morgan("dev"));
const cors = require("cors");
app.use(cors());



// app.use("/users", userRoutes);
app.use("/boards", boardRoutes ); 
app.use("/cards", cardRoutes); 




const PORT = process.env.PORT; //port from .env file

app.listen(PORT, () => {
  console.log(`Server running at http://localhost:${PORT}`);
});



//Upvote function
//The patch means we're only changing one major feel
app.patch("/cards/:id/upvote", async (req, res) => {
  const cardId = parseInt(req.params.id);

  try {
    const updatedCard = await prisma.card.update({
      where: { card_Id: cardId },
      data: {
        upVotes: {
          increment: 1,
        },
      },
    });

    res.status(200).json(updatedCard);
  } catch (err) {
    console.error("Failed to upvote card:", err);
    res.status(500).json({ error: "Failed to upvote card" });
  }
});