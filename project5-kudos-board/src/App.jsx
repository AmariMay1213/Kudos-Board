import pageLogo from "./assets/k.png";
import "./App.css";
import HomePage from "../Components/HomePage/HomePage";
// import KudosBoards from "../Components/KudosBoards/KudosBoards"
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <>
      <BrowserRouter>
        <div className="header">
          <header className="headerLogo">
            <img src={pageLogo} alt={"Page Logo"} />
          </header>
        </div>
        <main>
          <Routes>
          {/* main content here */}
          <Route path="/" element = {<HomePage/>} />
          {/* TODO: below, add the actual route the amari makes to specifically get information for one board */}
          {/* <Route path="/boards" element = {<KudosBoardCards/>} />  */}
          </Routes>
        </main>

        <footer>
          <p>&copy; 2025 Kudos Board</p>
        </footer>

      </BrowserRouter>
    </>
  );
}

export default App;
