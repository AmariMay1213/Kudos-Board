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



