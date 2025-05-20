import { Routes, Route, Link } from "react-router-dom";
import Home from "./pages/Home";
import Characters from "./pages/Characters";
import About from "./pages/About";

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-indigo-800 via-purple-900 to-black text-white font-mono">
      <nav className="bg-black bg-opacity-30 p-4 flex gap-6 text-xl">
        <Link to="/">Home</Link>
        <Link to="/characters">Characters</Link>
        <Link to="/about">About</Link>
      </nav>
      <div className="p-6">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/characters" element={<Characters />} />
          <Route path="/about" element={<About />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;
