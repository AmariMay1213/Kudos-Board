
const prisma = require("../models/user");

exports.getAll = async (req, res) => {
    try {
    const users = await prisma.user.findMany();
    res.json(users);
  } catch (err) {
    console.error(err);
    res.status(500).json({ error: "Something went wrong." });
  }

};

exports.getUserById = async (req,res) =>{
     const id = Number(req.params.id);

  const user = await prisma.user.findUnique({ where: { id } });
  if (!user) {
    return res.status(404).json({ error: "User not found!" });
  }
  res.json(user);

}; 

exports.registerUser = async (req,res) =>{
    const {email, username, password} = req.body; 

    const newUser = await prisma.user.create({
        data: {email, username, password},
    });
    res.status(201).json(newUser); 

}

exports.userLogin = async (req,res) =>{
    const {email, username, password} = req.body;

    const login = await prisma.user.create({
        data: {email, username, password}, 
    });
    res.status(201).json(login); 
}


exports.removeUser = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.user.delete({ where: { id } });
  res.status(204).end();
};