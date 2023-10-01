import logo from './logo.svg';
import './App.css';
import { Navbar } from './components/navbar';
import {BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import { Shop } from './pages/shop/shop'

function App() {
  return (
    <div className="App">
      <Router>
        <Navbar />
        <Routes>
          <Route path='/' element={ <Shop />}/>
          <Route path='/cart'/>
        </Routes>
      </Router>
    </div>
  );
}

export default App;
