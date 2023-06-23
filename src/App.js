import './App.css';
import SayMyName from './components/SayMyName';
import Pessoa from './components/Pessoa';
import Frase from './components/Frase';

function App() {
  
  const nome = 'Maria'

  return (
    <div className="App">
      <Frase/>
      <SayMyName nome="João"/>
      <SayMyName nome={nome}/>
      <Pessoa
        nome="Rodigro"
        idade="23"
        profissao="Programador"
        foto="https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg"
      />
    </div>
  );

}

export default App;
