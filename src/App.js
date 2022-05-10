import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
      </Routes>
    </div>
  );
}

export default App;
