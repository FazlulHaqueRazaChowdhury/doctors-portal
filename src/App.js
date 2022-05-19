import logo from './logo.svg';
import AnimatedCursor from "react-animated-cursor"
import './App.css';
import Header from './Components/Header/Header';
import { Routes, Route } from 'react-router-dom';
import Home from './Components/Home/Home';
import Footer from './Components/Footer/Footer';
import Appointment from './Components/Appointment/Appointment';
import 'react-day-picker/dist/style.css';
import LogIn from './Components/LogIn/LogIn';
import SignUp from './Components/SignUp/SignUp';
import RequireAuth from './Components/RequireAuth/RequireAuth';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Dashboard from './Components/Dashboard/Dashboard';
import MyAppointment from './Components/Dashboard/MyAppointment';
import Review from './Components/Dashboard/Review';
import AllUser from './Components/Dashboard/AllUser';
import History from './Components/Dashboard/History';
import RequireAdmin from './hooks/RequireAdmin';
import AddDoctor from './Components/Dashboard/AddDoctor';
import 'react-loading-skeleton/dist/skeleton.css'
import ManageDoctor from './Components/Dashboard/ManageDoctor';
import Payment from './Components/Payment/Payment';
function App() {
  return (
    <div className="App mx-auto  max-w-7xl">
      <AnimatedCursor
        innerSize={8}
        outerSize={30}
        color='58, 66, 86'
        outerAlpha={0.21}
        innerScale={0.7}
        outerScale={1.5}
        clickables={[
          'a',
          'input[type="text"]',
          'input[type="email"]',
          'input[type="number"]',
          'input[type="submit"]',
          'input[type="image"]',
          'label[for]',
          'select',
          'textarea',
          'button',
          '.link'
        ]}
      />
      <Header />
      <Routes>
        <Route path='/' element={<Home />}></Route>
        <Route path='/appointment' element={
          <RequireAuth>
            <Appointment />
          </RequireAuth>
        }></Route>
        <Route path='/dashboard' element={
          <RequireAuth>
            <Dashboard />
          </RequireAuth>
        }>
          <Route path='payment/:id' element={<Payment />}></Route>
          <Route index element={<MyAppointment />}></Route>
          <Route path='reviews' element={<Review />}></Route>

          <Route path='alluser' element={
            <RequireAdmin>
              <AllUser />
            </RequireAdmin>
          }></Route>
          <Route path='addDoctor' element={
            <RequireAdmin>
              <AddDoctor />
            </RequireAdmin>
          }></Route>
          <Route path='manageDoctor' element={
            <RequireAdmin>
              <ManageDoctor />
            </RequireAdmin>
          }></Route>

          <Route path='history' element={<History />}></Route>

        </Route>
        <Route path='/logIn' element={<LogIn />}></Route>
        <Route path='/signUp' element={<SignUp />}></Route>

      </Routes>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
}

export default App;
