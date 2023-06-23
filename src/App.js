import './App.css';
import OutraLista from './components/OutraLista';
function App() {


  const meusItens = ['CPU', 'Cadeira', 'Mesa']

  return (
    <div className="App">
      <h1>Renderização de Listas</h1>
      <OutraLista itens={meusItens}/>
      <OutraLista itens={''}/>
    </div>
  );

}

export default App;
