import Navbar from './components/navbar/Navbar';
import './App.css';
import Parctice from './components/parctice';
import Tick from './components/clock';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <div className="Parctice">
      <Parctice authorized={true} />
    </div>
    <div>
      <Tick />
    </div>
    
    </>
  );
}

export default App;
