import "./index.css";
import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home.js";
import About from "./pages/About.js";
import Contact from "./pages/Contact.js";
import Services from "./pages/Services.js";

function App() {
  return (
    <BrowserRouter>
      <Header>
        <Routes>
          <Route path="/Home" element={<Home />} />
          <Route path="/About" element={<About />} />
          <Route path="/Contact" element={<Contact />} />
          <Route path="/Services" element={<Services />} />
        </Routes>
      </Header>
    </BrowserRouter>
  );
}

export default App;
