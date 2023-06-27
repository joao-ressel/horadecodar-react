import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewService from "./components/pages/NewService";

import Container from "./components/layout/Container";
import NavBar from "./components/layout/NavBar"
import Footer from "./components/layout/Footer";
import Services from "./components/pages/Services";
import Service from "./components/pages/Service";

function App() {
  return (
    <Router>
      <NavBar/>
      <Container customClass='min-height'>
        <Routes>      
            <Route exact path="/" element={<Home />}/>
            <Route path="/Services" element={<Services />}/>
            <Route path="/company" element={<Company />}/>
            <Route path="/contact" element={<Contact />}/>
            <Route path="/services/:id" element={<Service />}/>
            <Route path="/newService" element={<NewService />}/>
        </Routes>
      </Container>
      <Footer/>
    </Router>
  )
}

export default App;
