import logo from './logo.svg';
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Appointment/Appointment';
import 'react-day-picker/dist/style.css';
function App() {
  return (
    <div className="App mx-auto  max-w-7xl">
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={<Appointment />}></Route>
      </Routes>
      <Footer></Footer>
    </div>
  );
}

export default App;
