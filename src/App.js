import './App.css';
import HelloWorld from './components/HelloWorld';

function App() {

  const name = 'João'
  const newName = name.toUpperCase()

  function sum(a, b){
    return a + b
  }

  const url = 'https://st.depositphotos.com/1010338/2099/i/600/depositphotos_20999947-stock-photo-tropical-island-with-palms.jpg'

  return (
    <div className="App">
      <h1>Hello World!</h1>
      <p>Olá {newName}</p>
      <p>Soma: {sum(1,2)}</p>
      <img src={url} alt='Minha Imagem'/>
      <HelloWorld/>
    </div>
  );
}

export default App;
