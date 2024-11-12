// DEPENDENCIES
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";

// PAGES
import Edit from "./Pages/Edit";
import Error from "./Pages/ErrorPage";
import Home from "./Pages/Home";
import Index from "./Pages/Index";
import New from "./Pages/New";
import Show from "./Pages/Show";

// COMPONENTS
import NavBar from "./Components/Organization/NavBar";
import About from "./Components/Organization/About"
import Footer from "./Components/Organization/Footer";
function App() {
  return (
    <div className="App">
      <Router>
        <NavBar />
        <main>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/users" element={<Index />} />
            <Route path="/users/new" element={<New />} />
            <Route exact path="/users/:id" element={<Show />} />
            <Route path="/users/:id/edit" element={<Edit />} />
            <Route path="/about" element={<About/>} />
            <Route path="*" element={<Error />} />
          </Routes>
        </main>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
