
import { Link, BrowserRouter as Router, Routes } from 'react-router-dom';
import {Route, Switch} from 'react-router'
import './App.css';
import Home from './pages/Home';
import Empresa from './pages/Empresa';
import Contato from './pages/Contato';
import NavBar from './components/layout/NavBar';
import Footer from './components/layout/Footer';

function App() {

  return (
    <Router>
      <NavBar/>
      <Routes>
        <Route exact path='/' element={<Home />}/>
        <Route  path='/empresa' element={<Empresa />}/>
        <Route  path='/contato' element={<Contato />}/>
      </Routes>
      <Footer/>
    </Router>
  )

}

export default App
