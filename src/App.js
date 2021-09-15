import './App.css';
import Dictionary from "./Dictionary"

function App() {
  return (
    <div className="App">
      <div className="container">
      <header className="App-header">
        <h1>Dictionary</h1>
      </header> 
      <main>
        <Dictionary defaultKeyword="hello"/>
      </main>
      <footer className='text-center'><small>This app has been coded by Marina Golovina and is <a href="https://github.com/MarGolNZ/react-she-codes-dictionary" target="_blank" rel="noreferrer"> open-sourced</a></small></footer>
       
       </div>
      
    </div>
  );
}

export default App;
