import pageLogo from "./assets/k.png";
import "./App.css";
import HomePage from "../Components/HomePage/HomePage";

function App() {
  return (
    <>
      <header className="header">
        <div className="headerLogo">
          <img src={pageLogo} alt={"Page Logo"} />
        </div>
      </header>
      <main>
        {/* main content here */}
        <HomePage />
      </main>
      <footer>
        <p>&copy; 2025 Kudos Board</p>
      </footer>
    </>
  );
}

export default App;
