
const prisma = require("../models/user");
const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');

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

    try{

    const existingUser = await prisma.user.findUnique({
      where:{ email}, 
    }); 

    if(existingUser){
      res.status(400).json({error: "Email already exists, please login"})
    }

     const hashedPassword = await bcrypt.hash(password, 10);


    const newUser = await prisma.user.create({
        data: {email, password: hashedPassword, username},
    });
    res.status(201).json({ user: { id: newUser.id, email: newUser.email } }); 

    }catch(err){
      res.status(400).json({err}); 
    }


}

exports.userLogin = async (req,res) =>{
    const {email, password} = req.body;

    try{

      const existingUser = await prisma.user.findUnique({
      where: {email}, 
    }); 

    if(!existingUser){
      res.status(400).json({error: "No email found, please register!"})
    }

    passwordsMatch = await bcrypt.compare(password, existingUser.password); 

    if(!passwordsMatch){
      res.status(400).json({error: "Password incorrect, please try again!"})
    }

    const token = jwt.sign(
      { id: existingUser.id }, process.env.JWT_SECRET, { expiresIn: '2h' }
    );
      
    res.status(201).json({ token, existingUser: { id: existingUser.id, email: existingUser.email } }); 

  }catch(err){
    res.status(400).json({err})
  }
}


exports.removeUser = async (req, res) => {
  const id = Number(req.params.id);
  await prisma.user.delete({ where: { id } });
  res.status(204).end();
};