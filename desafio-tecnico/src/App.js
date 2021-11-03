
import './App.css';
import Home from './pages/Home';
import { BrowserRouter } from 'react-router-dom';

function App() {
  return ( 
    <BrowserRouter>
    <div className="App">
     <Home></Home>
    </div>
      </BrowserRouter>
  );
}

export default App;
