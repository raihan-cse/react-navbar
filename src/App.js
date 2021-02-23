import Navbar from './components/navbar/Navbar';
import './App.css';
import Parctice from './components/parctice';

function App() {
  return (
    <>
    <div className="App">
      <Navbar />
    </div>
    <div className="Parctice">
      <Parctice authorized={false} />
    </div>
    </>
  );
}

export default App;
