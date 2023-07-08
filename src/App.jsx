import { BrowserRouter, Routes, Route } from "react-router-dom";
import MainHeader from './Components/MainHeader';
import Home from './Components/Home/Home';
import Invoice from './Components/Invoice/Invoice';
import Payment from "./Components/Payment/Payment";
import Login from './Components/Auth/Login';
import Register from './Components/Auth/Register';
import "./App.css"

function App() {

  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainHeader />} >
            <Route index element={<Home />} />
            <Route path="/invoice" element={<Invoice />} />
            <Route path="/payment" element={<Payment />} />
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App
