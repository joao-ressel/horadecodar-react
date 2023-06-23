import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewService from "./components/pages/NewService";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer";
import Services from "./components/pages/Services";

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>      
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/Services" element={<Services />}/>
            <Route exact path="/company" element={<Company />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/newService" element={<NewService />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
