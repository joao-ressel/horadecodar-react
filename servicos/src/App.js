import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Home from "./components/pages/Home";
import Company from "./components/pages/Company";
import Contact from "./components/pages/Contact";
import NewProject from "./components/pages/NewProject";

import Container from "./components/layout/Container";

function App() {
  return (
    <Router>
      <div>
        <Link to="/">Inicio</Link>
        <Link to="/company">Sobre</Link>
        <Link to="/contact">Contato</Link>
        <Link to="/newproject">Novo Serviço</Link>
      </div>
      <Container customClass='min-height'>
        <Routes>      
            <Route exact path="/" element={<Home />}/>
            <Route exact path="/company" element={<Company />}/>
            <Route exact path="/contact" element={<Contact />}/>
            <Route exact path="/newproject" element={<NewProject />}/>
        </Routes>
      </Container>
      <p>Footer</p>
    </Router>
  )
}

export default App;
