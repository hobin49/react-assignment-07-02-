import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Navigation from "components/Navigation";
import MovieDetail from "pages/MovieDetail";
import Chat from "components/Chat"
function App() {
  return (
    <Router>
      <Navigation />
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="movie" element={<MovieDetail />}></Route>
      </Routes>
      <Chat />
    </Router>
  );
}

export default App;
