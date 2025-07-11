import pageLogo from "./assets/k.png";
import "./App.css";
import HomePage from "../Components/HomePage/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { useState, useEffect } from "react";
import axios from "axios";
import KudosBoards from "../Components/KudosBoards/KudosBoards";
import KudosBoardCards from "../Components/KudosBoardCards/KudosBoardCards";

// import { useNavigate } from "react-router-dom";

function App() {
  const [boards, setBoards] = useState([]);
  const [cards, setCards] = useState([]);
  const [loading, setLoading] = useState(false);
  const [categories, setCategories] = useState([]); 
  const API_BASE = "http://localhost:3000";

  //   const [error, setError] = useState(null)
  //   const [user, setUser] = useState(null);
  //   const [token, setToken] = useState("");
  //   const navigate = useNavigate();
  // const [showOnlyUserBoards, setShowOnlyUserBoards] = useState(false);

  //   const handleLogin = async (email, password, username) => {
  //   try {
  //     const response = await axios.post(`http://localhost:3000/users/login`, {
  //       email,
  //       password,
  //       username,
  //     });

  //     const { token } = response.data;

  //     //token is proof that the email and password are correct
  //     setToken(token);
  //     localStorage.setItem("token", token);

  //     //userResponse is grabbing the users email and password
  //     const userResponse = await axios.get(`http://localhost:3000/users/me`, {
  //       headers: {
  //         Authorization: `Bearer ${token}`,
  //       },
  //     });

  //     const user = userResponse.data;
  //     setUser(user);
  //     localStorage.setItem("user", JSON.stringify(user));

  //     console.log("Logged in successfully:", user);
  //   } catch (err) {
  //     console.error("Login failed:", err.response?.data || err.message);
  //   }
  // };

  // const handleRegister = async (email,password, username) =>{
  //   try{
  //     const response = await axios.post(`http://localhost:3000/users/register`,{
  //       email,
  //       password,
  //       username
  //     });

  //     await handleLogin(email,password, username);
  //   }catch(err){
  //     console.log(err);
  //   }
  // }

  // const handleLogout = () => {
  //   //erasing user and token from memory
  //   setUser(null);
  //   setToken(null);
  //   localStorage.removeItem("user");
  //   localStorage.removeItem("token");
  //   navigate("/"); // Send them back to the home page
  // };

  // //Ensures the user remains logged in even after refreshing their page
  //  useEffect(() => {
  //   // Get token and user from localStorage
  //   const storedToken = localStorage.getItem("token");
  //   const storedUser = localStorage.getItem("user");

  //   // If both exist, update state
  //   if (storedToken && storedUser) {
  //     setToken(storedToken);
  //     try {
  //       setUser(JSON.parse(storedUser)); // parse from string to object
  //     } catch (error) {
  //       console.error("Failed to parse user from localStorage:", error);
  //     }
  //   }
  // }, []);

  // useEffect(() => {
  //   const fetchBoards = async () => {
  //     try {
  //       const { data } = await axios.get(`http://localhost:3000/boards`);
  //       console.log(data);
  //       setBoards(data);
  //       console.log("Fetched boards:", data);
  //     } catch (err) {
  //       console.error("Error boards: ", err);
  //     }
  //   };
  //   fetchBoards();
  // }, []);

  const fetchBoards = async () => {
  try {
    const { data } = await axios.get(`http://localhost:3000/boards`);
    setBoards(data);
  } catch (err) {
    console.error("Error fetching all boards:", err);
  }
};

const handleSearch = async (query) => {
  try {
    const { data } = await axios.get(
      `http://localhost:3000/boards?search=${query}` 
    );
    setBoards(data);
  } catch (err) {
    console.error("Error searching boards:", err);
  }
};



  useEffect(() => {
    const fetchCards = async () => {
      try {
        const { data } = await axios.get(`http://localhost:3000/cards/`);
        console.log("card data",data);
        setCards(data);
        console.log("Fetched cards:", data);
      } catch (err) {
        console.error("Error cards: ", err);
      }
    };
    fetchCards();
  }, []);

  useEffect(()=>{
    const fetchCategories = async () => {
      try{
        const {data} = await axios.get(`http://localhost:3000/boards/categories`);
        console.log(data);
        setCategories(data.categories);
        console.log("Fetched Board for this category: ", data.categories); 
      }catch(err){
        console.error("Error grabbing cards from that category: ", err); 
      }

    };
    fetchCategories(); 
  }, []); 

const handleFilterByCategory = async (category) => {
  try {
    if (category.toLowerCase() === "all") {
      const res = await axios.get("http://localhost:3000/boards");
      setBoards(res.data);
    } else {
      const res = await axios.get(`http://localhost:3000/boards?category=${category}`);
      setBoards(res.data);
    }
  } catch (err) {
    console.error(`Error filtering by ${category}:`, err);
  }
};



  const handleRecentSort = async () =>{
    try{
      const res = await axios.get("http://localhost:3000/boards?sort=created_at_desc");
      setBoards(res.data);

    }catch(err){
      console.error("Error, can not sort by most recent: ", err)
    }
  };

  const createCard = async (newCard) => {
  try {
    const { data } = await axios.post(`http://localhost:3000/cards`, newCard);
    const refreshed = await axios.get(`http://localhost:3000/cards`);
    setCards(refreshed.data);
    console.log("Created and re-fetched cards:", data);
  } catch (err) {
    console.log("Error creating card:", err);
  }
};


const deleteCard = async (card_Id) => {
  try {
    await axios.delete(`${API_BASE}/cards/${card_Id}`);
    setCards((prevCards) => prevCards.filter((card) => card.card_Id !== card_Id));
  } catch (error) {
    console.error("Error deleting card:", error);
  }
};




  const createBoard = async (newBoard) => {
    console.log(newBoard)
    try {
      const { data } = await axios.post(
        "http://localhost:3000/boards",
        newBoard
      );
      setBoards((prev) => [...prev, data]);
      console.log("Created board: ", data);
      console.log("Creating board with token:", token);
    } catch (err) {
      console.log("Error creating board: ", err);
    }
  };

  const deleteBoard = async (board_Id) => {
    const boardToDelete = boards.find((b) => b.board_Id === board_Id);

    if (!boardToDelete) {
      console.warn("You do not have permission to delete this board.");
      return;
    }

    try {
      await axios.delete(`http://localhost:3000/boards/${board_Id}`);
      setBoards((prev) => prev.filter((board) => board.board_Id !== board_Id));
      console.log("Deleted board:", board_Id);
    } catch (err) {
      console.log("Error deleting board:", err);
    }
  };

  console.log(cards);

  return (
    <>
      <>
        <div className="header">
          <header className="headerLogo">
            <img src={pageLogo} alt={"Page Logo"} />
          </header>
        </div>
        <main>
          <Routes>
            {/* main content here */}
            <Route
              path="/"
              element={
                <HomePage
                  boards={boards}
                  // user={user}
                  createBoard={createBoard}
                  deleteBoard={deleteBoard}
                  categories={categories}
                  handleFilterByCategory={handleFilterByCategory}
                  handleRecentSort={handleRecentSort}
                  handleSearch = {handleSearch}
                  fetchBoards = {fetchBoards}
                />
              }
            />
            {/* <Route
             path="/user/login"
             element={
               <LoginPage
                handleLogin={handleLogin}
                 handleRegister={handleRegister}
                 user={user}
              />
                     }
              /> */}
            <Route
              path="/boards/:board_Id"
              element={
                <KudosBoardCards
                  cards={cards}
                  createCard={createCard}
                  deleteCard={deleteCard}
                />
              }
            />

            {/* TODO: below, add the actual route the amari makes to specifically get information for one board */}
            {/* <Route path="/boards" element = {<KudosBoardCards/>} />  */}
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Kudos Board</p>
        </footer>
      </>
    </>
  );
}

export default App;
